import React from "react";
import { Route, Switch } from "react-router";

import CodeLogin from "../components/Auth/CodeLogin";
import Login from "../components/Auth/Login";
import Singup from "../components/Auth/Singup";
import Landing from "./Landing";
import Map from "./Map";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={Login} />
      <Route path="/login/code" exact component={CodeLogin} />
      <Route path="/signup" exact component={Singup} />
      <PrivateRoute path="/map" exact component={Map} />
    </Switch>
  );
};

export default Routes;
