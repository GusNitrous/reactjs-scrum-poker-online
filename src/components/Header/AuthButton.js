import React from "react";
import {Button} from "@material-ui/core";


export const AuthButton = ({isAuth, onLogin, onLogout }) => {
    const title = isAuth ? 'logout' : 'login';
    const onClick = isAuth ? onLogout : onLogin;
    return <Button
        size="small"
        onClick={onClick}>
        {title}
    </Button>
}
