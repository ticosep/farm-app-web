import React from "react";
import { useAuthorized } from "../stores/hooks/useAuthStore";
import { Route, Redirect } from "react-router";

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
