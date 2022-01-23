import React, {useEffect} from 'react';
import {Routes} from "../../utils/routing";
import {useLocation, useParams} from "react-router";
import {useStore} from "effector-react";
import {$authUser} from "../../models/auth";
import {Redirect} from "react-router-dom";
import {joinToRoom} from "../../models/room";
import {$wsState, socketInit} from "../../models/ws";
import {Playground} from "../../components/Playground/Playground";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import {Issues} from "../../components/Issues/Issues";
import {Dashboard} from "../../components/Dashboard/Dashboard";

const useStyles = makeStyles(() => {
    return {
        root: {
            flexGrow: 1,
        },
        mainContent: {
            paddingTop: 35
        },
        gridItem: {
            margin: "auto",
            flexGrow: 1
        }
    }
});

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

    useEffect(() => {
        if (!ws) {
            socketInit();
        }

        if (id && ws) {
            joinToRoom(id);
        }
    }, [id, ws]);

    if (error) {
        return <h3>{error.message}</h3>
    }

    if (exception) {
        return <h3>{exception.message}</h3>
    }

    return !isLoggedIn
        ? <Redirect to={{
            pathname: Routes.AUTH,
            state: {referrer: pathname}
        }}/>
        : <div className={styles.root}>
            <Grid container spacing={4} className={styles.mainContent}>
                <Grid className={styles.gridItem} item lg={7} md={7} sm={12}>
                    <Playground/>
                </Grid>
                <Grid className={styles.gridItem} item lg={5} md={5} sm={12}>
                    <Dashboard/>
                </Grid>
                <Grid item xs={12}>
                    <Issues/>
                </Grid>
            </Grid>
        </div>
}
