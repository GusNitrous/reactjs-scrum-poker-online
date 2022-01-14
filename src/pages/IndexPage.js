import React from "react";
import {Route, Router, Switch,} from "react-router-dom";
import {Home} from './Home/Home';
import {VotingRoom} from './VotingRoom/VotingRoom';
import {NotFound} from './Errors/NotFound';

import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {history, Routes} from '../utils/routing';
import {Auth} from "./Auth/Auth";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 250px)',
        margin: "auto"
    },
}));

/**
 * IndexPage.
 */
export const IndexPage = () => {
    const classes = useStyles();
    return (
        <Router history={history}>
            <Header title="ScrumPokerOnline" />
            <div className={classes.root}>
                <Container maxWidth="md">
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
            </div>
            <Footer
                title="ScrumPokerOnline"
                description="Online estimation tool for agile teams"
            />
        </Router>
    );
}
