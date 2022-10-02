import React, {lazy, Suspense} from "react";
import {Route, Router, Switch} from "react-router-dom";
import {history, Routes} from "./utils/routing";


const AuthPage = lazy(() => import('./pages/Auth/AuthPage'));
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const VotingRoomPage = lazy(() => import('./pages/VotingRoom/VotingRoomPage'));
const NotFoundErrorPage = lazy(() => import('./pages/Errors/NotFound'));

export const RoutesInit = ({layout}) => (
        <Router history={history}>
            <layout.component {...layout.props}>
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
            </layout.component>
        </Router>
);


