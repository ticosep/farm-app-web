import { Box, Button, Form, FormField, Text } from "grommet";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import NewFarmMap from "./NewFarmMap";

const NewFarmForm = () => {
  const { handleSubmit, register, setValue, control, errors } = useForm();

  const onSubmit = (data) => {
    //userStore.register({ ...data });
  };

  return (
    <Box width="500px" height="600px" pad="medium">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          as={<FormField label="Nome" type="text" />}
        />
        {errors.name && <Text color="status-critical">Campo obrigatório</Text>}

        <Controller
          name="production"
          control={control}
          as={<FormField label="Produção" type="text" />}
        />
        <FormField label="Localização">
          <NewFarmMap name="location" register={register} setValue={setValue} />
        </FormField>

        <Button type="submit">Criar</Button>
      </Form>
    </Box>
  );
};

export default NewFarmForm;
