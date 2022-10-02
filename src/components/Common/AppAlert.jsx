import React from "react";
import {Slide, Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {useStore} from "effector-react";
import {$wsState, resetWsErrors} from "../../models/ws";
import {$appState, resetAppErrors} from "../../models/app";


export const AppAlert = () => {
    const {error, exception} = useStore($wsState);
    const {networkError} = useStore($appState);
    const wsErrorMessage = (error || exception)?.message;

    const errorMessage = wsErrorMessage || networkError?.message;
    const hasErrors = Boolean(wsErrorMessage) || Boolean(networkError);

    const handleClose = (event, reason) => {
        if (reason !== 'clickaway') {
            resetWsErrors();
            resetAppErrors();
        }
    }

    return <Snackbar
        TransitionComponent={(props) => <Slide {...props} direction="up"/>}
        anchorOrigin={{vertical: "bottom", horizontal: "center"}}
        open={hasErrors}
    >
        <Alert
            style={{width: '100%'}}
            onClose={handleClose}
            severity={networkError?.level || "error"}>
            {errorMessage}
        </Alert>
    </Snackbar>
}
