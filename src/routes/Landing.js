import { Box, Heading, Image, Text } from "grommet";
import React from "react";
import styled from "styled-components";

import Login from "../components/Auth/Login";

const imgPath = require("../assets/layout.png");

const LandingSection = styled(Box)`
  width: 100%;
  padding: 1rem 20rem;
`;

const TextBox = styled(Box)`
  max-width: 30rem;
`;

const TitleBox = styled(Box)`
  max-width: 25rem;
  margin-bottom: 1rem;
`;

const Landing = () => {
  return (
    <React.Fragment>
      <LandingSection
        direction="row"
        flex={true}
        justify="between"
        alignContent="center"
        align="center"
        background="brand"
      >
        <Box>
          <TitleBox>
            <Heading margin="none">Sua lavoura inteligente</Heading>
          </TitleBox>
          <TextBox>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </TextBox>
        </Box>
        <Login />
      </LandingSection>
      <LandingSection
        direction="row"
        flex={true}
        alignContent="center"
        align="center"
        background="light-3"
      >
        <Box width="100%">
          <Box flex={true} justify="center" align="center">
            <Heading margin="none" textAlign="center">
              Um novo jeito de controlar sua lavoura
            </Heading>
            <Box width="40rem">
              <Text margin="1rem" textAlign="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>
          </Box>
          <Image height="600px" src={imgPath} />
        </Box>
      </LandingSection>
    </React.Fragment>
  );
};

export default Landing;
