import React from 'react';
import Grid from '@material-ui/core/Grid';
import {QuickStart} from '../../components/QuickStart/QuickStart';
import {isLoggedIn} from "../../utils/auth";
import {Redirect} from "react-router-dom";
import {useStyles} from "./HomeStyles";

/**
 * HomePage with QuickStart.
 */
export function Home() {
    const classes = useStyles();
    return (
        isLoggedIn() ?
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.mainGrid}>
                <QuickStart/>
            </Grid> : <Redirect to='/auth'/>
    );
}
