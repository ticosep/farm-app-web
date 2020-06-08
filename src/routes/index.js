import React from "react";
import { Switch, Route } from "react-router";
import Login from "./Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  );
};

export default Routes;
