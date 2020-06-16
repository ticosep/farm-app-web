import { Header } from "grommet";
import React from "react";

const CustomHeader = ({ children }) => {
  return (
    <Header
      flex={true}
      justify="between"
      background="dark-1"
      pad={{ horizontal: "20rem", vertical: "small" }}
    >
      {children}
    </Header>
  );
};

export default CustomHeader;
