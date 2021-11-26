import React from 'react';
import Grid from '@material-ui/core/Grid';
import QuickStart from '../../components/QuickStart/QuickStart';
import {isLoggedIn} from "../../utils/auth";
import {Redirect} from "react-router-dom";
import {useStyles} from "./HomeStyles";
import {useStore} from "effector-react";
// import {$wsState} from "../../models/ws";

/**
 * HomePage with QuickStart.
 */
export function Home() {
    const classes = useStyles();
    // const {error} = useStore($wsState);
    return (
        isLoggedIn() ?
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.mainGrid}>
                <QuickStart/>
                {/*<div>{error && error?.message}</div>*/}
            </Grid> : <Redirect to='/auth'/>
    );
}
