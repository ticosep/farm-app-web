import { faTractor, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "grommet";
import { getSnapshot } from "mobx-state-tree";
import React from "react";
import styled from "styled-components";

import { useUser } from "../../stores/hooks/useUserStore";
import { mediaQuery } from "../../utils/mediaQuery";

const StyledMenu = styled(Menu)`
  span {
    width: 5rem;
    overflow: hidden;
    white-space: nowrap;
  }

  @media ${mediaQuery.md} {
    span {
      width: auto;
    }
  }
`;

const UserInfo = () => {
  const user = getSnapshot(useUser());
  return (
    <StyledMenu
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
