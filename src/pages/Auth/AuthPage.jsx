import React from 'react';
import {Container} from '@material-ui/core';
import {Redirect} from "react-router-dom";
import {AuthForm} from "../../components/";
import {useStore} from "effector-react";
import {$authUser} from "../../models/auth";
import {Routes} from "../../utils/routing";
import {makeStyles} from "@material-ui/core/styles";


const AuthPage = () => {
    const styles = useStyles();
    const authUser = useStore($authUser);
    const isLoggedIn = !!authUser?.userName;
    return isLoggedIn ?
            <Redirect to={Routes.HOME}/> :
            <Container className={styles.root}>
                <AuthForm/>
            </Container>
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: 0,
        maxWidth: 350
    }
}));

export default AuthPage;
