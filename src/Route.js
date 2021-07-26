import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.js";
import Dashboard from "./Dashboard.js";
import Settings from "./Settings.js";

const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <App />} />
        <Route exact path="/dashboard" render={() => <Dashboard />} />
        <Route exact path="/settings" render={() => <Settings />} />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;