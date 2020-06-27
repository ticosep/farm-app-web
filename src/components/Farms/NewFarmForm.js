import { Box, Button, Form, FormField, Text } from "grommet";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import { useUserStore } from "../../stores/hooks/useUserStore";

const NewFarmForm = () => {
  const [creating, setCreating] = React.useState(false);
  const { handleSubmit, control, errors } = useForm();
  const userStore = useUserStore();

  const onSubmit = (data) => {
    setCreating(true);
    userStore.createFarm({ ...data }).then(() => {
      setCreating(false);
    });
  };

  return (
    <Box pad="medium">
      {!creating && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            as={<FormField label="Nome" type="text" />}
          />
          {errors.name && (
            <Text color="status-critical">Campo obrigatório</Text>
          )}

          <Controller
            name="production"
            control={control}
            as={<FormField label="Produção" type="text" />}
            rules={{ required: true }}
          />
          {errors.production && (
            <Text color="status-critical">Campo obrigatório</Text>
          )}

          <Button gap="small" color="brand" type="submit">
            Criar
          </Button>
        </Form>
      )}
      {creating && <Text>Criando...</Text>}
    </Box>
  );
};

export default NewFarmForm;
