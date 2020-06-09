import React from "react";
import { Switch, Route } from "react-router";
import Login from "./Login";
import Map from "./Map";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <PrivateRoute path="/map" exact component={Map} />
    </Switch>
  );
};

export default Routes;
