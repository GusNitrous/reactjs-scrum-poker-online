import React, {useEffect} from 'react';
import {Routes} from "../../utils/routing";
import {useLocation, useParams} from "react-router";
import {useStore} from "effector-react";
import {$authUser} from "../../models/auth";
import {Redirect} from "react-router-dom";
import {joinToRoom} from "../../models/room";
import {$wsState, resetErrors, socketInit} from "../../models/ws";
import {Playground} from "../../components/Playground/Playground";
import Grid from '@material-ui/core/Grid';
import {Dashboard} from "../../components/Dashboard/Dashboard";
import {ResultList} from "../../components/ResultList/ResultList";
import {Slide, Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {useStyles} from "./VotingRoomStyles";


/**
 * VotingRoom page component.
 */
export const VotingRoom = () => {
    const styles = useStyles();
    const {id} = useParams();
    const {pathname} = useLocation();
    const authUser = useStore($authUser);
    const {ws, error, exception} = useStore($wsState);
    const isLoggedIn = !!authUser?.userName;
    const errorMessage = (error || exception)?.message;

    useEffect(() => {
        if (!ws) {
            socketInit();
        }
        if (id && ws) {
            joinToRoom(id);
        }
    }, [id, ws]);

    const handleClose = (event, reason) => {
        if (reason !== 'clickaway') {
            resetErrors();
        }
    }

    return !isLoggedIn
        ? <Redirect to={{
            pathname: Routes.AUTH,
            state: {referrer: pathname}
        }}/>
        : <div className={styles.root}>
            <Snackbar
                TransitionComponent={(props) => <Slide {...props} direction="up"/>}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                open={!!errorMessage}
            >
                <Alert style={{width: '100%'}} onClose={handleClose} severity="error">
                    {errorMessage}
                </Alert>
            </Snackbar>
            <Grid container spacing={2} className={styles.mainContent}>
                <Grid item className={styles.gridItem} lg={7} md={7} sm={12}>
                    <Playground/>
                </Grid>
                <Grid item className={styles.gridItem} lg={5} md={5} sm={12}>
                    <Dashboard/>
                </Grid>
                <Grid item xs={12}>
                    <ResultList/>
                </Grid>
            </Grid>
        </div>
}
