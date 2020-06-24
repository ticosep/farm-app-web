import {
  faChartPie,
  faMap,
  faTag,
  faTractor,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Text } from "grommet";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const buttons = [
  {
    label: "Mapa",
    icon: faMap,
    to: "/map",
    isAllowed: (user) => true,
  },
  {
    label: "Marcadores",
    icon: faTag,
    to: "/tags",
    isAllowed: (user) => true,
  },
  {
    label: "Funcionarios",
    icon: faUsers,
    to: "/employees",
    isAllowed: (user) => true,
  },
  {
    label: "Dashboards",
    icon: faChartPie,
    to: "/dashboards",
    isAllowed: (user) => user.is_owner,
  },
];

const CustomLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const CustomButton = styled(Button)`
  width: 100%;
`;

export const SidebarButton = ({ label, active, icon, to, ...props }) => (
  <CustomLink color="white" to={to}>
    <CustomButton plain {...props}>
      {({ hover }) => (
        <Box
          direction="row"
          align="center"
          gap="small"
          pad="small"
          background={hover || active ? "focus" : "brand"}
        >
          <FontAwesomeIcon icon={icon} />
          <Text size="large">{label}</Text>
        </Box>
      )}
    </CustomButton>
  </CustomLink>
);
