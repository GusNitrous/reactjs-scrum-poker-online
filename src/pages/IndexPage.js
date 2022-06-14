import React, {lazy, Suspense} from "react";
import {Route, Router, Switch,} from "react-router-dom";
import {history, Routes} from '../utils/routing';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {AppAlert} from "../components/Common/AppAlert";

const AuthPage = lazy(() => import('./AuthPage'));
const HomePage = lazy(() => import('./HomePage'));
const VotingRoomPage = lazy(() => import('./VotingRoomPage'));
const NotFoundErrorPage = lazy(() => import('./Errors/NotFound'));

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 250px)',
        margin: "auto",
        background: '#fff '
    },
}));

const IndexPage = () => {
    const classes = useStyles();
    const appName = 'Scrummarly';
    return (
        <>
            <Router history={history}>
                <Header title={appName}/>
                <div className={classes.root}>
                    <Container maxWidth="md">
                        <main>
                            <Suspense fallback={<div>Loading</div>}>
                                <Switch>
                                    <Route exact path={Routes.HOME}>
                                        <HomePage/>
                                    </Route>
                                    <Route exact path={Routes.AUTH}>
                                        <AuthPage/>
                                    </Route>
                                    <Route path={Routes.VOTING_ROOM}>
                                        <VotingRoomPage/>
                                    </Route>
                                    <Route exact path={Routes.ROOT}>
                                        <AuthPage/>
                                    </Route>
                                    <Route path={Routes.ROOT}>
                                        <NotFoundErrorPage/>
                                    </Route>
                                </Switch>
                            </Suspense>
                        </main>
                    </Container>
                </div>
                <Footer
                    title={appName}
                    description="Online estimation tool for agile teams"
                />
            </Router>
            <AppAlert/>
        </>
    );
}

export default IndexPage;
