import { Box } from "grommet";
import React from "react";
import styled from "styled-components";

import LoginForm from "../components/Auth/Login";

const StyledBox = styled(Box)`
  width: 100%;
  height: 100%;
`;

const Login = () => {
  return (
    <StyledBox flex={true} align="center" justify="center">
      <LoginForm />
    </StyledBox>
  );
};

export default Login;
