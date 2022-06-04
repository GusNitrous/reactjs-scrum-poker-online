import React, {useEffect} from 'react';
import {Routes} from "../utils/routing";
import {useLocation, useParams} from "react-router";
import {useStore} from "effector-react";
import {$authUser} from "../models/auth";
import {Redirect} from "react-router-dom";
import {joinToRoom} from "../models/room";
import {$wsState, socketInit} from "../models/ws";
import {Playground} from "../components/Playground/Playground";
import Grid from '@material-ui/core/Grid';
import {Dashboard} from "../components/Dashboard/Dashboard";
import {ResultList} from "../components/ResultList/ResultList";
import clsx from 'clsx';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(({breakpoints}) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        [breakpoints.only('sm')]: {
            margin: 'auto',
            maxWidth: 520
        },
        [breakpoints.down('xs')]: {
            margin: 'auto',
            maxWidth: 440
        }
    },
    mainContent: {
        paddingTop: 25
    },
    gridItem: {
        margin: "auto",
        flexGrow: 1
    },
    playgroundBlock: {
        paddingTop: '25px',
    },
    dashboardBlock: {
        margin: 0,
    }
}));

const VotingRoomPage = () => {
    const styles = useStyles();
    const {id} = useParams();
    const {pathname} = useLocation();
    const authUser = useStore($authUser);
    const {ws} = useStore($wsState);
    const isLoggedIn = !!authUser?.userName;

    useEffect(() => {
        if (!ws) {
            socketInit();
        }
        if (id && ws) {
            joinToRoom(id);
        }
    }, [id, ws]);

    return !isLoggedIn
        ? <Redirect to={{
            pathname: Routes.AUTH,
            state: {referrer: pathname}
        }}/>
        : <div className={styles.root}>
            <Grid container
                  justifyContent="center"
                  spacing={2}
                  className={styles.mainContent}>
                <Grid item
                      className={clsx(styles.gridItem, styles.playgroundBlock)}
                      lg={7}
                      md={7}
                      sm={12}>
                    <Playground/>
                </Grid>
                <Grid item
                      className={clsx(styles.gridItem, styles.dashboardBlock)}
                      lg={5}
                      md={5}
                      sm={12}>
                    <Dashboard/>
                </Grid>
                <Grid item xs={12}>
                    <ResultList/>
                </Grid>
            </Grid>
        </div>
}

export default VotingRoomPage;
