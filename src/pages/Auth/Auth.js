import {Container, CssBaseline} from '@material-ui/core';
import React, {Component} from 'react';
import {isLoggedIn} from "../../utils/auth";
import {Redirect, withRouter} from "react-router-dom";
import {AuthForm} from "../../components/AuthForm/AuthForm";

/**
 * Auth page component.
 */
class Auth extends Component {
    render() {
        return isLoggedIn() ?
            <Redirect to='/quickstart'/> :
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <AuthForm />
            </Container>
    }
}

export default withRouter(Auth);
