import React from 'react';
import {QuickStart} from '../../components/QuickStart/QuickStart';
import {Redirect} from "react-router-dom";
import {useStyles} from "./HomeStyles";
import {useStore} from "effector-react";
import {$authUser} from "../../models/auth";
import {Routes} from "../../utils/routing";
import {$wsState} from "../../models/ws";
import Container from "@material-ui/core/Container";

/**
 * HomePage with QuickStart.
 */
export const Home = () => {
    const styles = useStyles();
    const {error} = useStore($wsState);
    const authUser = useStore($authUser);
    const isLoggedIn = !!authUser?.userName;

    return (
        isLoggedIn ?
            <Container
                maxWidth="xs"
                className={styles.root}>
                <QuickStart />
                <div>
                    {error && error?.message}
                </div>
            </Container> : <Redirect to={Routes.AUTH}/>
    );
}
