import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Footer, Heading, Text } from "grommet";
import React from "react";

const CustomHeader = ({ children }) => {
  return (
    <React.Fragment>
      <Box
        pad={{ horizontal: "20rem", vertical: "small" }}
        flex={true}
        direction="row"
        justify="between"
        background="light-3"
      >
        <Box width="25rem">
          <Heading level="4">Sobre nós</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
        <Box gap="small">
          <Heading level="4">Contato</Heading>
          <Box gap="small" direction="row" align="center">
            <FontAwesomeIcon icon={faMailBulk} />
            <Text>contato@contato.com</Text>
          </Box>

          <Box gap="small" direction="row" align="center">
            <FontAwesomeIcon icon={faPhone} />
            <Text>+55 33333-3333</Text>
          </Box>

          <Box gap="small" direction="row" align="center">
            <FontAwesomeIcon icon={faBuilding} />
            <Box>
              <Text>Rua Dos bobos, 0</Text>
              <Text>Limeira</Text>
            </Box>
          </Box>

          <Box direction="row" margin={{ top: "1rem" }} gap="medium">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
          </Box>
        </Box>
      </Box>
      <Footer
        flex={true}
        justify="between"
        background="light-4"
        pad={{ horizontal: "20rem", vertical: "small" }}
      >
        {children}
      </Footer>
    </React.Fragment>
  );
};

export default CustomHeader;
