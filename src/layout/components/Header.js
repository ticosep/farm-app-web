import { Header } from "grommet";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  width: 100%;
`;
const CustomHeader = ({ children }) => {
  return (
    <StyledHeader
      flex={true}
      justify="between"
      background="dark-1"
      pad={{ horizontal: "20rem", vertical: "small" }}
    >
      {children}
    </StyledHeader>
  );
};

export default CustomHeader;
