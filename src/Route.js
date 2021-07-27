import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { auth } from "./firebase.js";
import App from "./App.js";
import Dashboard from "./Dashboard.js";
import Settings from "./Settings.js";

const Routes = () => {
  const [signed, setSigned] = useState(false);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setSigned(true);
    } else {
      setSigned(false);
    }
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (signed ? <Dashboard /> : <App />)}
        />
        <Route exact path="/dashboard" render={() => <Dashboard />} />
        <Route exact path="/settings" render={() => <Settings />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
