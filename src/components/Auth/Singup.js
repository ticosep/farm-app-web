import { Box, Button, Form, FormField, TextInput } from "grommet";
import React from "react";
import { Redirect } from "react-router";
import styled from "styled-components";

import { useAuthorized, useUserStore } from "../../stores/hooks/useUserStore";

const LoginBox = styled(Box)`
  width: 300px;

  padding: 1rem;
`;

const Signup = () => {
  const [value, setValue] = React.useState({});

  const isAuthorized = useAuthorized();
  const userStore = useUserStore();

  if (isAuthorized) return <Redirect to={{ pathname: "/map" }} />;

  const handleSubmit = (e) => {
    userStore.register({ ...e.value });
  };

  return (
    <LoginBox background="white">
      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={handleSubmit}
      >
        <FormField label="Nome">
          <TextInput required={true} type="text" name="name" />
        </FormField>

        <FormField label="Sobrenome">
          <TextInput required={true} type="text" name="surname" />
        </FormField>

        <FormField label="CPF">
          <TextInput required={true} type="text" name="cpf" />
        </FormField>

        <FormField label="E-mail">
          <TextInput required={true} type="email" name="email" />
        </FormField>

        <FormField label="Senha">
          <TextInput required={true} type="password" name="password" />
        </FormField>

        <Box
          margin={{
            top: "large",
          }}
        >
          <Button type="submit" primary label="Registrar" />
        </Box>
      </Form>
    </LoginBox>
  );
};

export default Signup;
