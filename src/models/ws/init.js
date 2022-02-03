import {
    $wsState,
    handleWsConnectionFx,
    handleWsErrorFx,
    handleWsExceptionFx,
    resetErrors,
    socketInit,
    socketInitFx,
    wsConnection,
    wsError,
    wsException
} from "./index";
import {forward, sample} from "effector";
import {$authUser} from "../auth";
import {getSocket} from "../../api/ws";

socketInitFx.use(({socket, token}) => {
    if (socket?.connected) {
        return socket;
    }
    if (!token) {
        throw new Error('Socket init error');
    }
    return getSocket(token);
});

handleWsExceptionFx.use((err) => {
    console.err('WS_EXCEPTION', err);
});

handleWsErrorFx.use((err) => {
    console.err('WS_ERROR', err);
});

handleWsConnectionFx.use((ws) => {
    console.log('CONNECTION', ws);
});

$wsState.on(wsError, (state, error) => ({...state, error}));
$wsState.on(wsException, (state, exception) => ({...state, exception}));
$wsState.on(wsConnection, (state, ws) => ({...state, ws}));
$wsState.on(resetErrors, (state, ws) => ({...state, error: null, exception: null,}));

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
    from: wsConnection,
    to: handleWsConnectionFx
});
