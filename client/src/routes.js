import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Reading from "./pages/Reading";
import Studio from "./pages/Studio";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/reading" component={Reading} />
                <Route path="/studio" component={Studio} />
            </Switch>
        </BrowserRouter>
    )
}