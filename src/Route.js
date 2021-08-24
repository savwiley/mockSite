import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { auth } from "./components/firebase.js";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import PostPage from "./components/Post";

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
          render={() => (signed ? <Dashboard /> : <Home />)}
        />
        <Route exact path="/dashboard" render={() => <Dashboard />} />
        <Route exact path="/settings" render={() => <Settings />} />
        <Route exact path="/:displayName" render={() => <Profile />} />
        <Route exact path="/:displayName/:date" render={() => <PostPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
