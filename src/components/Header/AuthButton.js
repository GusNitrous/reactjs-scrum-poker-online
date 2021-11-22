import {Button} from "@material-ui/core";
import React from "react";
import {useStyles} from "./AuthButtonStyles";

/**
 * AuthButton.
 */
export const AuthButton = ({isAuth, onLogin, onLogout }) => {
    const styles = useStyles();
    const title = isAuth ? 'logout' : 'login';
    const onClick = isAuth ? onLogout : onLogin;

    return <Button
        className={styles.authButton}
        size="small"
        onClick={onClick}>
        {title}
    </Button>
}
