import { Box } from "grommet";
import React from "react";
import styled from "styled-components";

import CodeLoginForm from "../components/Auth/CodeLogin";

const StyledBox = styled(Box)`
  width: 100%;
  height: 100%;
`;

const Login = () => {
  return (
    <StyledBox flex={true} align="center" justify="center">
      <CodeLoginForm />
    </StyledBox>
  );
};

export default Login;
