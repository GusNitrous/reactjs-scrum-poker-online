import {Container, CssBaseline} from '@material-ui/core';
import React from 'react';
import {Redirect} from "react-router-dom";
import {AuthForm} from "../../components/AuthForm/AuthForm";
import {useStore} from "effector-react";
import {$authUser} from "../../models/auth";
import {Routes} from "../../utils/routing";

/**
 * Auth page component.
 */
export const Auth = () => {
    const authUser = useStore($authUser);
    const isLoggedIn = !!authUser?.userName;
    return isLoggedIn ?
        <Redirect to={Routes.HOME}/> :
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <AuthForm />
        </Container>
}
