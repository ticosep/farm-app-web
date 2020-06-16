import { Box, Button, Form, FormField, TextInput } from "grommet";
import React from "react";
import { Redirect } from "react-router";
import styled from "styled-components";

import { useAuthorized, useUserStore } from "../../stores/hooks/useUserStore";

const LoginBox = styled(Box)`
  width: 300px;
  height: 300px;

  padding: 1rem;
`;

const Login = () => {
  const [value, setValue] = React.useState({});

  const isAuthorized = useAuthorized();
  const userStore = useUserStore();

  if (isAuthorized) return <Redirect to={{ pathname: "/map" }} />;

  const handleSubmit = (e) => {
    const { email, password } = e.value;

    userStore.login(email, password);
  };

  return (
    <LoginBox
      border={{
        color: "black",
        size: "medium",
        style: "solid",
        side: "all",
      }}
      background="white"
    >
      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={handleSubmit}
      >
        <FormField label="E-mail">
          <TextInput type="email" name="email" />
        </FormField>

        <FormField label="Senha">
          <TextInput type="password" name="password" />
        </FormField>

        <Box
          margin={{
            top: "large",
          }}
        >
          <Button type="submit" primary label="Login" />
        </Box>
      </Form>
    </LoginBox>
  );
};

export default Login;
