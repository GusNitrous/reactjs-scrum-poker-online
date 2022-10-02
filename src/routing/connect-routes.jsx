import React, {Suspense} from "react";
import {Route, Router, Switch} from "react-router-dom";
import {history} from './history';
import {AppRoutes} from "./routes";

export const ConnectRoutes = ({layout}) => (
        <Router history={history}>
            <layout.component {...layout.props}>
                <Suspense fallback={<div>Loading</div>}>
                    <Switch>
                        {AppRoutes.map((route, index) => <Route key={index} {...route}/>)}
                    </Switch>
                </Suspense>
            </layout.component>
        </Router>
);


