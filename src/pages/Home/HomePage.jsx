import React from 'react';
import {QuickStart} from '../../components/QuickStart/QuickStart';
import {Redirect} from "react-router-dom";
import {useStore} from "effector-react";
import {$authUser} from "../../models/auth";
import {Routes} from "../../utils/routing";
import {$wsState} from "../../models/ws";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

const HomePage = () => {
    const styles = useStyles();
    const {error} = useStore($wsState);
    const authUser = useStore($authUser);
    const isLoggedIn = !!authUser?.userName;

    return (
        isLoggedIn ?
            <Container
                maxWidth="xs"
                className={styles.root}>
                <QuickStart/>
                <div>
                    {error && error?.message}
                </div>
            </Container> : <Redirect to={Routes.AUTH}/>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        padding: 0,
        maxWidth: 350
    },
}));

export default HomePage;
