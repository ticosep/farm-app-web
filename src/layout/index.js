import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Anchor, Box, Button, Grommet, Header, Nav, Text } from "grommet";
import { grommet } from "grommet/themes";
import React from "react";

import { useAuthorized } from "../stores/hooks/useAuthStore";

const items = [
  { label: "HTML", href: "#" },
  { label: "JS", href: "#" },
  { label: "CSS", href: "#" },
  { label: "REACT", href: "#" },
];

const SidebarButton = ({ label, ...rest }) => (
  <Button plain {...rest}>
    {({ hover }) => (
      <Box
        background={hover ? "accent-1" : undefined}
        pad={{ horizontal: "large", vertical: "medium" }}
      >
        <Text size="large">{label}</Text>
      </Box>
    )}
  </Button>
);

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [active, setActive] = React.useState();
  const isAuthorized = useAuthorized();

  if (!isAuthorized) {
    return <>{children}</>;
  }

  return (
    <Grommet theme={grommet}>
      <Header background="dark-1" pad="medium">
        <Box direction="row" align="center" gap="small">
          <Anchor color="white" href="https://github.com/ShimiSun">
            ShimiSun
          </Anchor>
        </Box>
        <Nav direction="row">
          {items.map((item) => (
            <Anchor href={item.href} label={item.label} key={item.label} />
          ))}
        </Nav>
      </Header>
      <Box fill direction="row">
        <Nav background="neutral-1">
          {["Dashboard", "Devices", "Settings"].map((label) => (
            <SidebarButton
              key={label}
              label={label}
              active={label === active}
              onClick={() => setActive(label)}
            />
          ))}
        </Nav>
        {children}
      </Box>
    </Grommet>
  );
};

export default AppLayout;
