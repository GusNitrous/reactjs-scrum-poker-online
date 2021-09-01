import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { Home } from './Home/Home';

/**
 * IndexPage.
 */
export function IndexPage() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link component={RouterLink} to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link component={RouterLink} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link component={RouterLink} to="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
