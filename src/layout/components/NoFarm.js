import { faTractor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Text } from "grommet";
import React from "react";

const NoFarm = () => {
  return (
    <Box
      justify="center"
      align="center"
      direction="column"
      background="dark-2"
      width="100%"
      height="100%"
    >
      <FontAwesomeIcon size="2x" icon={faTractor} />
      <Text> Nenhuma fazenda selecionada</Text>
    </Box>
  );
};

export default NoFarm;
