import { Box } from "grommet";
import React from "react";
import styled from "styled-components";

import SignupForm from "../components/Auth/Singup";

const StyledBox = styled(Box)`
  width: 100%;
`;

const Login = () => {
  return (
    <StyledBox flex={true} align="center" justify="center">
      <SignupForm />
    </StyledBox>
  );
};

export default Login;
