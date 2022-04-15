import React, {lazy, Suspense} from "react";
import {Route, Router, Switch,} from "react-router-dom";
import {history, Routes} from '../utils/routing';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AuthPage = lazy(() => import('./AuthPage'));
const HomePage = lazy(() => import('./HomePage'));
const VotingRoomPage = lazy(() => import('./VotingRoomPage'));
const NotFoundErrorPage = lazy(() => import('./Errors/NotFound'));

const IndexPage = () => {
    const classes = useStyles();
    return (
        <Router history={history}>
            <Header title="Scrummarly"/>
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
                                <Route path={Routes.ROOT}>
                                    <NotFoundErrorPage/>
                                </Route>
                            </Switch>
                        </Suspense>
                    </main>
                </Container>
            </div>
            <Footer
                title="Scrummarly"
                description="Online estimation tool for agile teams"
            />
        </Router>
    );
}

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 250px)',
        margin: "auto"
    },
}));

export default IndexPage;
