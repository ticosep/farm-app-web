import React from "react";
import { Redirect, Route } from "react-router";

import { useAuthorized } from "../stores/hooks/useUserStore";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = useAuthorized();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

export default PrivateRoute;
