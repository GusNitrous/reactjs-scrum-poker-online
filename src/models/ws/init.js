import {
    $wsState,
    handleWsConnectionFx,
    handleWsErrorFx,
    handleWsExceptionFx,
    resetWsErrors,
    socketInit,
    socketInitFx,
    wsConnection,
    wsError,
    wsException
} from "./index";
import {forward, sample} from "effector";
import {$authUser, doLogout} from "../auth";
import {getSocket} from "../../api/ws";
import {HttpStatus} from "../../api/http";

socketInitFx.use(({socket, token}) => {
    if (socket?.connected) {
        return socket;
    }
    if (!token) {
        throw new Error('Socket init error');
    }
    return getSocket(token);
});

handleWsExceptionFx.use(({status}) => {
    if (status === HttpStatus.UNAUTHORIZED) {
        doLogout();
    }
});

handleWsErrorFx.use((err) => {
    console.log('WS_ERROR', err);
});

handleWsConnectionFx.use((ws) => {
    console.log('CONNECTION', ws);
});

$wsState.on(wsError, (state, error) => ({...state, error}));
$wsState.on(wsException, (state, exception) => ({...state, exception}));
$wsState.on(wsConnection, (state, ws) => ({...state, ws}));
$wsState.on(resetWsErrors, (state, ws) => ({...state, error: null, exception: null,}));

sample({
    source: {$wsState, $authUser},
    clock: socketInit,
    fn: ({$wsState, $authUser}) => ({
        socket: $wsState.ws,
        token: $authUser.jwtToken
    }),
    target: socketInitFx
});

forward({
    from: wsException,
    to: handleWsExceptionFx
});


forward({
    from: wsError,
    to: handleWsErrorFx
});

forward({
    from: wsConnection,
    to: handleWsConnectionFx
});
