import { Box, Button, Form, TextInput } from "grommet";
import React from "react";
import { Redirect } from "react-router";
import styled from "styled-components";

import { useAuthorized, useUserStore } from "../stores/hooks/useUserStore";

const MainBox = styled(Box)`
  width: 100vw;
  height: 100vh;
`;

const Login = () => {
  const [value, setValue] = React.useState({});

  const isAuthorized = useAuthorized();
  const userStore = useUserStore();

  if (isAuthorized) return <Redirect to={{ pathname: "/map" }} />;

  const handleSubmit = (value) => {
    const { email, password } = value;

    userStore.login(email, password);
  };

  return (
    <Box>
      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={handleSubmit}
      >
        <TextInput placeholder="E-mail" type="email" name="email" />

        <TextInput placeholder="Senha" type="password" name="password" />

        <Button type="submit" primary label="Login" />
      </Form>
    </Box>
  );
};

export default Login;
