import { faPlus, faRoad, faTractor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Layer, Menu } from "grommet";
import React from "react";
import { useHistory } from "react-router";

import NewFarmForm from "../../components/Farms/NewFarmForm";

const FarmsMenu = () => {
  const history = useHistory();
  const [show, setShow] = React.useState(false);
  return (
    <React.Fragment>
      <Menu
        plain
        dropProps={{
          align: { top: "bottom", right: "right" },
        }}
        items={[
          {
            label: "Nova fazenda",
            gap: "small",
            onClick: () => {
              setShow(true);
            },
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
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <NewFarmForm />
        </Layer>
      )}
    </React.Fragment>
  );
};

export default FarmsMenu;
