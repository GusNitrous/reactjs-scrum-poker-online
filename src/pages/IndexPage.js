import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './Home/Home';
import { VotingRoom } from './VotingRoom/VotingRoom';
import { NotFound } from './Errors/NotFound';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline  from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

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
  const sections = [
      { title: 'CreateRoom', url: '/' },
      { title: 'JoinRoom', url: '/room' },
    ];

  return (
    <React.Fragment>
      <Router>
        <div className={classes.root}>
            <CssBaseline />
            <Container maxWidth="lg">
            <Header title="ScrumPokerOnline" sections={sections} />
                <main>
                <Switch>
                    <Route exact path="/">
                    <Home />
                    </Route>
                    <Route path="/room">
                    <VotingRoom />
                    </Route>
                    <Route path="/">
                    <NotFound />
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
