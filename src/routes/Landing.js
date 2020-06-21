import { Box, Heading, Image, Text } from "grommet";
import React from "react";
import styled from "styled-components";

import { Container } from "../components/_shared/Container";
import { mediaQuery } from "../utils/mediaQuery";

const imgPath = require("../assets/layout.png");

const TextBox = styled(Box)`
  max-width: 30rem;
`;

const TitleBox = styled(Box)`
  max-width: 25rem;
  margin-bottom: 1rem;
`;

const ClientsImg = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  margin-right: 2rem;
  margin-top: 1rem;
`;

const StyledContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${mediaQuery.lg} {
    justify-content: space-between;
    flex-direction: row;
  }
`;

const clients = [
  { name: "Fazenda bacurau", logo: require("../assets/partners_ex/3.png") },
  { name: "Fazenda bacurau", logo: require("../assets/partners_ex/3.png") },
  { name: "Fazenda bacurau", logo: require("../assets/partners_ex/3.png") },
];
const Landing = () => {
  return (
    <React.Fragment>
      <Box background="brand">
        <StyledContainer>
          <Box>
            <TitleBox>
              <Heading margin="none">Sua lavoura inteligente</Heading>
            </TitleBox>
            <TextBox>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </TextBox>
          </Box>
        </StyledContainer>
      </Box>
      <Box background="light-1">
        <StyledContainer alignContent="center" align="center">
          <Box width="100%">
            <Box flex={true} justify="center" align="center">
              <Heading margin="none" textAlign="center">
                Um novo jeito de controlar sua lavoura
              </Heading>
              <Box width="40rem">
                <Text margin="1rem" textAlign="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Box>
            </Box>
            <Image height="600px" src={imgPath} />
          </Box>
        </StyledContainer>
      </Box>
      <Box background="light-1">
        <Container width="100%" direction="column">
          <Box>
            <Heading margin="none" level="2">
              Nossos clientes
            </Heading>
          </Box>
          <Box width="100%" direction="row" wrap={true}>
            {clients.map(({ name, logo }) => {
              return (
                <Box>
                  <ClientsImg src={logo} />
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Landing;
