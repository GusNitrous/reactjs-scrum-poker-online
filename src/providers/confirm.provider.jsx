import React from 'react';
import {ConfirmProvider as MuiConfirmProvider} from "material-ui-confirm";

export const ConfirmProvider = ({children, ...props}) => {
    return <MuiConfirmProvider
        defaultOptions={{
            dialogProps: {
                fullWidth: true,
                maxWidth: "xs",
            },
            confirmationButtonProps: {autoFocus: true}
        }}
        {...props}
    >
        {children}
    </MuiConfirmProvider>
};

