import {
    $wsState,
    handleWsConnectionFx,
    handleWsErrorFx,
    handleWsExceptionFx,
    wsConnection,
    wsError,
    wsException
} from "./index";

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
$wsState.on(wsConnection, (state, ws) => ({...state, isConnected: ws?.connected}));
