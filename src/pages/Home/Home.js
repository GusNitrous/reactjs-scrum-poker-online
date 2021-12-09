import React from 'react';
import Grid from '@material-ui/core/Grid';
import QuickStart from '../../components/QuickStart/QuickStart';
import {Redirect} from "react-router-dom";
import {useStyles} from "./HomeStyles";
import {useStore} from "effector-react";
import {$authUser} from "../../models/auth";
import {Routes} from "../../utils/routing";
import {$wsState} from "../../models/ws";

/**
 * HomePage with QuickStart.
 */
export const Home = () => {
    const classes = useStyles();
    const {ws, error} = useStore($wsState);
    const authUser = useStore($authUser);
    const isLoggedIn = !!authUser?.userName;

    return (
        isLoggedIn ?
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.mainGrid}>
                <QuickStart />
                <div>{error && error?.message}</div>
                <div>{ws?.connected ? 'connected' : 'disconnected'}</div>
            </Grid> : <Redirect to={Routes.AUTH}/>
    );
}
