import { Header } from "grommet";
import React from "react";
import styled from "styled-components";

import { Container } from "../../components/_shared/Container";
import { mediaQuery } from "../../utils/mediaQuery";

const StyledHeader = styled(Header)`
  width: 100%;
  position: fixed;
  top: 0;
`;

const StyledContainer = styled(Container)`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  @media ${mediaQuery.lg} {
    justify-content: space-between;
  }
`;

const CustomHeader = ({ children }) => {
  return (
    <StyledHeader background="dark-1">
      <StyledContainer>{children}</StyledContainer>
    </StyledHeader>
  );
};

export default CustomHeader;
