import {$appState, networkError, resetAppErrors} from "./index";

$appState.on(networkError, (appState, networkError) => ({networkError}));
$appState.on(resetAppErrors, () => ({networkError: null}));
