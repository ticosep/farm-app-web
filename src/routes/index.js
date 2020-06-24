import React from "react";
import { Route, Switch } from "react-router";

import FarmsTable from "../components/Farms/FarmsTable";
import CodeLogin from "./CodeLogin";
import Landing from "./Landing";
import Login from "./Login";
import Map from "./Map";
import PrivateRoute from "./PrivateRoute";
import Signup from "./Signup";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={Login} />
      <Route path="/login/code" exact component={CodeLogin} />
      <Route path="/signup" exact component={Signup} />
      <PrivateRoute path="/map" exact component={Map} />
      <PrivateRoute path="/farms" exact component={FarmsTable} />
    </Switch>
  );
};

export default Routes;
