import { Box, Button, Form, FormField, Text } from "grommet";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Redirect } from "react-router";
import styled from "styled-components";

import { useAuthorized, useUserStore } from "../../stores/hooks/useUserStore";
import { Container } from "../_shared/Container";

const SignupBox = styled(Container)`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledForm = styled(Form)`
  min-width: 500px;
`;

const Signup = () => {
  const { handleSubmit, control, errors, setError, clearError } = useForm();

  const isAuthorized = useAuthorized();
  const userStore = useUserStore();

  if (isAuthorized) return <Redirect to={{ pathname: "/map" }} />;

  const onSubmit = (data) => {
    userStore.register({ ...data });
  };

  const handleChange = (values) => {
    const { email, email_confirm, password, password_confirm } = values;
    const errors = [];

    if (email !== email_confirm) {
      errors.push({
        type: "required",
        name: "email_confirm",
        message: "Os e-mails devem ser iguais!",
      });
    } else {
      clearError("email_confirm");
    }

    if (password !== password_confirm) {
      errors.push({
        type: "required",
        name: "password_confirm",
        message: "As senhas devem ser iguais!",
      });
    } else {
      clearError("password_confirm");
    }

    setError(errors);
  };

  return (
    <SignupBox background="white">
      <StyledForm onSubmit={handleSubmit(onSubmit)} onChange={handleChange}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          as={<FormField label="Nome" type="text" />}
        />
        {errors.name && <Text color="status-critical">Campo obrigatório</Text>}

        <Controller
          name="surname"
          control={control}
          as={<FormField label="Sobrenome" type="text" />}
        />

        <Controller
          name="cpf"
          control={control}
          rules={{
            required: true,
            pattern: /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2})$/,
          }}
          as={<FormField label="CPF" type="text" />}
        />
        {errors.cpf && (
          <Text color="status-critical">
            Digite seu CPF no formato 000.000.000-00
          </Text>
        )}

        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
          }}
          as={<FormField label="E-mail" type="email" />}
        />
        {errors.email && (
          <Text color="status-critical">
            Digite seu email corretamente, este deve possuir @
          </Text>
        )}

        <Controller
          name="email_confirm"
          control={control}
          rules={{
            required: true,
          }}
          as={<FormField label="Confirme o e-mail" type="email" />}
        />
        {errors.email_confirm && (
          <Text color="status-critical">{errors.email_confirm.message}</Text>
        )}
        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          }}
          as={<FormField label="Senha" type="password" />}
        />
        {errors.password && (
          <Text color="status-critical">
            Senha deve possuir no minimo 8 caractres, uma letra e um número
          </Text>
        )}

        <Controller
          name="password_confirm"
          control={control}
          rules={{
            required: true,
          }}
          as={<FormField label="Confirme a senha" type="password" />}
        />
        {errors.password_confirm && (
          <Text color="status-critical">{errors.password_confirm.message}</Text>
        )}

        <Box
          margin={{
            top: "large",
          }}
        >
          <Button type="submit" primary label="Registrar" />
        </Box>
      </StyledForm>
    </SignupBox>
  );
};

export default Signup;
