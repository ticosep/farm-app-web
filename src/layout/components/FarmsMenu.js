import { faPlus, faRoad, faTractor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Menu } from "grommet";
import React from "react";
import { useHistory } from "react-router";

const FarmsMenu = () => {
  const history = useHistory();
  return (
    <Menu
      plain
      dropProps={{
        align: { top: "bottom", right: "right" },
      }}
      items={[
        {
          label: "Nova fazenda",
          gap: "small",
          onClick: () => {},
          icon: <FontAwesomeIcon icon={faTractor} />,
        },
        {
          label: "Minhas fazendas",
          gap: "small",
          onClick: () => {
            history.push("/profile");
          },
          icon: <FontAwesomeIcon icon={faRoad} />,
        },
      ]}
    >
      <Box direction="row" gap="small">
        <FontAwesomeIcon icon={faPlus} />
      </Box>
    </Menu>
  );
};

export default FarmsMenu;
