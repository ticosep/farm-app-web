import { Box } from "grommet";
import React from "react";

const UserContainer = ({ children }) => {
  return (
    <Box pad="small" background="dark-2" width="100%" height="100%">
      {children}
    </Box>
  );
};

export default UserContainer;
