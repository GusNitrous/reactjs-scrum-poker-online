import React from "react";
import {Route, Router, Switch,} from "react-router-dom";
import {Home} from './Home/Home';
import {VotingRoom} from './VotingRoom/VotingRoom';
import {NotFound} from './Errors/NotFound';

import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {history, Routes} from '../utils/routing';
import {Auth} from "./Auth/Auth";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
}));

/**
 * IndexPage.
 */
export const IndexPage = () => {
    const classes = useStyles();
    return (
        <Router history={history}>
            <div className={classes.root}>
                <CssBaseline/>
                <Container maxWidth="lg">
                    <Header title="ScrumPokerOnline" />
                    <main>
                        <Switch>
                            <Route exact path={Routes.HOME}>
                                <Home/>
                            </Route>
                            <Route exact path={Routes.AUTH}>
                                <Auth/>
                            </Route>
                            <Route path={Routes.VOTING_ROOM}>
                                <VotingRoom/>
                            </Route>
                            <Route path={Routes.ROOT}>
                                <NotFound/>
                            </Route>
                        </Switch>
                    </main>
                </Container>
                <Footer
                    title="ScrumPokerOnline"
                    description="Online estimation tool for agile teams"
                />
            </div>
        </Router>
    );
}
