import { Avatar } from "grommet";
import { getSnapshot } from "mobx-state-tree";
import React from "react";
import { useHistory } from "react-router";

import { useUser } from "../../stores/hooks/useUserStore";

const UserInfo = () => {
  const user = getSnapshot(useUser());
  const history = useHistory();

  const userLetter = String(user.name).slice(0, 1);
  return (
    <Avatar
      background="brand"
      size="2rem"
      onClick={() => history.push("/profile")}
    >
      {userLetter}
    </Avatar>
  );
};

export default UserInfo;
