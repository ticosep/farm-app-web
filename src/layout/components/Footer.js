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

import { Container } from "../../components/_shared/Container";

const CustomHeader = ({ children }) => {
  return (
    <React.Fragment>
      <Container flex={true} justify="between" background="light-3">
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
        <Box direction="column">
          <Heading level="4">Contato</Heading>
          <Box direction="row" align="center" gap="small">
            <FontAwesomeIcon icon={faMailBulk} />
            <Text>contato@contato.com</Text>
          </Box>
          <Box
            direction="row"
            margin={{ top: "1rem" }}
            align="center"
            gap="small"
          >
            <FontAwesomeIcon icon={faPhone} />
            <Text>+55 33333-3333</Text>
          </Box>
          <Box
            direction="row"
            margin={{ top: "1rem" }}
            align="center"
            gap="small"
          >
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
      </Container>
      <Footer>
        <Container flex={true} justify="between" background="light-4">
          {children}
        </Container>
      </Footer>
    </React.Fragment>
  );
};

export default CustomHeader;
