import { faTractor, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "grommet";
import { getSnapshot } from "mobx-state-tree";
import React from "react";

import { useUser } from "../../stores/hooks/useUserStore";

const UserInfo = () => {
  const user = getSnapshot(useUser());
  return (
    <Menu
      dropProps={{ align: { top: "bottom", left: "left" } }}
      label={`${user.name} ${user.surname}`}
      items={[
        {
          label: "Profile",
          icon: <FontAwesomeIcon icon={faUser} />,
          gap: "small",
        },
        {
          label: "Fazendas",
          icon: <FontAwesomeIcon icon={faTractor} />,
          gap: "small",
        },
      ]}
    />
  );
};

export default UserInfo;
