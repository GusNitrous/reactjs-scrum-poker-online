import React from "react";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import {Home} from './Home/Home';
import VotingRoom from './VotingRoom/VotingRoom';
import {NotFound} from './Errors/NotFound';

import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Auth from './Auth/Auth';
import {Button} from "@material-ui/core";
import * as AuthAPI from '../rest-api/auth';

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
export function IndexPage() {
    const classes = useStyles();
    const gotoAuth = (history) => history.replace('/auth');
    const renderAuthButton = ({isAuth, history}) => {
        return <Button
            size="small"
            onClick={() => {
                if (isAuth) {
                    AuthAPI.logout()
                        .catch((err) => {
                            alert(err?.message || 'Error logout');
                        })
                        .finally(() => {
                            gotoAuth(history);
                        });
                } else {
                    gotoAuth(history);
                }
            }}
        >{isAuth ? 'logout' : 'login'}</Button>;
    }

    return (
        <React.Fragment>
            <Router>
                <div className={classes.root}>
                    <CssBaseline/>
                    <Container maxWidth="lg">
                        <Header title="ScrumPokerOnline" render={renderAuthButton}/>
                        <main>
                            <Switch>
                                <Route exact path="/quickstart">
                                    <Home/>
                                </Route>
                                <Route exact path="/auth">
                                    <Auth/>
                                </Route>
                                <Route path="/room/:id">
                                    <VotingRoom/>
                                </Route>
                                <Route path="/">
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
        </React.Fragment>
    );
}
