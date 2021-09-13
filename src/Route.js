import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { auth } from "./components/firebase.js";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import PostPage from "./components/Post";

const Routes = () => {
  const [load, setLoad] = useState(true);
  const [signed, setSigned] = useState(false);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setSigned(true);
      setLoad(false);
    } else {
      setLoad(false);
    }
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            load ? <Loading /> : signed ? <Dashboard /> : <Home />
          }
        />
        <Route
          exact
          path="/dashboard"
          render={() =>
            load ? <Loading /> : signed ? <Dashboard /> : <Home />
          }
        />
        <Route
          exact
          path="/settings"
          render={() => (load ? <Loading /> : signed ? <Settings /> : <Home />)}
        />
        <Route
          exact
          path="/:displayName"
          render={() => (load ? <Loading /> : signed ? <Profile /> : <Home />)}
        />
        <Route
          exact
          path="/:displayName/:date"
          render={() => (load ? <Loading /> : signed ? <PostPage /> : <Home />)}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
