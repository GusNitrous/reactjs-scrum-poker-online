import {Button} from "@material-ui/core";
import React from "react";

/**
 * AuthButton.
 */
export const AuthButton = ({isAuth, onLogin, onLogout }) => {
    const title = isAuth ? 'logout' : 'login';
    const onClick = isAuth ? onLogout : onLogin;
    return <Button
        size="small"
        onClick={onClick}>
        {title}
    </Button>
}
