import React from "react";
import styled from "styled-components";

import { Container } from "../../components/_shared/Container";
import { mediaQuery } from "../../utils/mediaQuery";

const StyledHeader = styled(Container)`
  width: 100%;
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;

  @media ${mediaQuery.lg} {
    justify-content: space-between;
  }
`;

const CustomHeader = ({ children }) => {
  return (
    <StyledHeader flex={true} background="dark-1">
      {children}
    </StyledHeader>
  );
};

export default CustomHeader;
