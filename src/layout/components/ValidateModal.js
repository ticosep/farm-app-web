import { Box, Button, Heading, Layer, Text } from "grommet";
import React from "react";
import { Redirect } from "react-router";

import api from "../../services/api";
import { useUserStore } from "../../stores/hooks/useUserStore";

const ValidateModal = ({ id, email }) => {
  const [show, setShow] = React.useState(true);
  const [redirect, setRedirect] = React.useState(false);
  const [generating, setGenerating] = React.useState(false);

  const userStore = useUserStore();

  if (redirect) return <Redirect to={{ pathname: "/" }} />;

  return (
    <React.Fragment>
      {show && (
        <Layer>
          {!generating && (
            <Box flex={true} gap="large" pad="large">
              <Box direction="column" gap="medium">
                <Heading level="4" margin="none">
                  Seu email ainda não foi validado
                </Heading>
                <Text>
                  {`Por favor acesse o link enviado para ${email} e tenha acesso a sua
            conta. 
            Caso não tenha recebido clique no botão novo email, que
            enviaremos um novo link de verificação!`}
                </Text>
              </Box>
              <Box height="50px" justify="between" direction="row" gap="small">
                <Button
                  label="Novo email"
                  primary
                  onClick={() => {
                    setGenerating(true);
                    api.validate({ id, email }).then(() => {
                      setShow(false);
                      setGenerating(false);

                      userStore.logout();
                      setRedirect(true);
                    });
                  }}
                />
                <Button
                  label="Fechar"
                  onClick={() => {
                    setShow(false);

                    userStore.logout();
                    setRedirect(true);
                  }}
                />
              </Box>
            </Box>
          )}
          {generating && (
            <React.Fragment>
              <Text>{`Enviando novo email para ${email}...`}</Text>
            </React.Fragment>
          )}
        </Layer>
      )}
    </React.Fragment>
  );
};

export default ValidateModal;
