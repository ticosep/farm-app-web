import { Box, Text } from "grommet";
import { getSnapshot } from "mobx-state-tree";
import React from "react";
import styled from "styled-components";

import { useUser } from "../../stores/hooks/useUserStore";
import { mediaQuery } from "../../utils/mediaQuery";

const StatusBox = styled(Box)`
  display: none;

  @media ${mediaQuery.lg} {
    display: block;
    margin: 1rem;
  }
`;

const UserText = styled(Text)`
  display: none;

  @media ${mediaQuery.lg} {
    display: inline;
    white-space: pre;
  }
`;

const UserInfo = () => {
  const user = getSnapshot(useUser());
  return (
    <Box direction="row" align="center" gap="none">
      <StatusBox background="brand" height="20px" width="20px" />
      <UserText>Usuário - </UserText>
      <Text>{`${user.name} ${user.surname}`}</Text>
    </Box>
  );
};

export default UserInfo;
