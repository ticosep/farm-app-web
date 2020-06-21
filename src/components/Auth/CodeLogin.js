import { Box, Button, Form, FormField, TextInput } from "grommet";
import React from "react";
import { Redirect } from "react-router";
import styled from "styled-components";

import { useAuthorized, useUserStore } from "../../stores/hooks/useUserStore";
import { Container } from "../_shared/Container";

const LoginBox = styled(Container)`
  justify-content: center;
  align-items: center;
  height: 463px;
`;

const CodeLogin = () => {
  const [value, setValue] = React.useState({});

  const isAuthorized = useAuthorized();
  const userStore = useUserStore();

  if (isAuthorized) return <Redirect to={{ pathname: "/map" }} />;

  const handleSubmit = (e) => {
    const { code } = e.value;

    userStore.codeLogin(code);
  };

  return (
    <LoginBox>
      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={handleSubmit}
      >
        <FormField label="Código">
          <TextInput type="text" name="code" />
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

export default CodeLogin;
