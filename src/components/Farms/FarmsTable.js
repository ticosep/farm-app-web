import {
  faCheck,
  faPen,
  faPlus,
  faTimes,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, DataTable, Text } from "grommet";
import { getSnapshot } from "mobx-state-tree";
import React from "react";
import styled from "styled-components";

import { useFarms } from "../../stores/hooks/useUserStore";
import UserContainer from "../_shared/UserContainer";

const columns = [
  {
    property: "name",
    header: <Text>Nome</Text>,
    primary: true,
  },
  {
    property: "production",
    header: <Text>Produção</Text>,
    primary: true,
  },
  {
    property: "is_paid",
    header: <Text>Mes pago</Text>,
    primary: true,
    render: (datum) => (
      <Box color={datum.is_paid ? "brand" : "red"} pad={{ vertical: "xsmall" }}>
        <FontAwesomeIcon icon={datum.is_paid ? faCheck : faTimes} />
      </Box>
    ),
  },
  {
    property: "edit",
    header: <Text>Editar</Text>,
    primary: true,
    render: (datum) => (
      <Box pad={{ vertical: "xsmall" }}>
        <FontAwesomeIcon icon={faPen} onClick={() => console.log(datum.id)} />
      </Box>
    ),
  },
  {
    property: "delete",
    header: <Text>Excluir</Text>,
    primary: true,
    render: (datum) => (
      <Box pad={{ vertical: "xsmall" }}>
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => console.log(datum.id)}
        />
      </Box>
    ),
  },
];

const PlusIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  cursor: pointer;
`;

const FarmsTable = () => {
  const farms = getSnapshot(useFarms());
  return (
    <UserContainer>
      <Box direction="row" gap="small" align="center">
        <PlusIcon icon={faPlus} onClick={() => console.log("nova")} />
        <Text size="1.5rem">Minhas fazendas</Text>
      </Box>
      <DataTable columns={columns} data={farms}></DataTable>
    </UserContainer>
  );
};

export default FarmsTable;
