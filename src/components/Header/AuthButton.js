import {Button} from "@material-ui/core";
import * as AuthAPI from "../../rest-api/auth";
import React from "react";
import {Routes} from "../../utils/routing";

/**
 * AuthButton.
 */
export const AuthButton = ({isAuth, history}) => {
    const gotoAuth = (history) => history.replace(Routes.AUTH);
    return <Button
        size="small"
        onClick={() => {
            if (isAuth) {
                AuthAPI.logout()
                    .catch((err) => {
                        console.log(err?.message || 'Error logout');
                    })
                    .finally(() => {
                        gotoAuth(history);
                    });
            } else {
                gotoAuth(history);
            }
        }}
    >{isAuth ? 'logout' : 'login'}</Button>;
}
