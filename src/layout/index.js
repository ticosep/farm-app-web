import React from "react";

import { useAuthorized } from "../stores/hooks/useUserStore";
import UserLayout from "./appUser";
import DefaultLayout from "./default";

const AppLayout = ({ children }) => {
  const isAuthorized = useAuthorized();

  if (!isAuthorized) {
    return <DefaultLayout>{children}</DefaultLayout>;
  }

  return <UserLayout>{children}</UserLayout>;
};

export default AppLayout;
