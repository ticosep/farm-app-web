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
import styled from "styled-components";

import { Container } from "../../components/_shared/Container";
import { mediaQuery } from "../../utils/mediaQuery";

const StyledContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${mediaQuery.lg} {
    justify-content: space-between;
    flex-direction: row;
  }
`;

const CustomFooter = ({ children }) => {
  return (
    <React.Fragment>
      <Box width="100%" background="light-3">
        <StyledContainer>
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
        </StyledContainer>
      </Box>
      <Footer width="100%" background="light-4">
        <Container flex={true} justify="between">
          {children}
        </Container>
      </Footer>
    </React.Fragment>
  );
};

export default CustomFooter;
