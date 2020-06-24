import React from "react";
import { useHistory } from "react-router";

import { useAuthorized } from "../stores/hooks/useUserStore";
import UserLayout from "./appUser";
import DefaultLayout from "./default";

const AppLayout = ({ children }) => {
  const isAuthorized = useAuthorized();
  const history = useHistory();

  React.useEffect(() => {
    if (isAuthorized) {
      history.push("/map");
    }
  }, []);

  if (!isAuthorized) {
    return <DefaultLayout>{children}</DefaultLayout>;
  }

  return <UserLayout>{children}</UserLayout>;
};

export default AppLayout;
