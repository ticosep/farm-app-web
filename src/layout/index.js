import { Anchor, Box, Button, Header, Nav, Text } from "grommet";
import React from "react";

import trimoTheme from "../config/theme";
import { useAuthorized } from "../stores/hooks/useUserStore";
import { useInitialized } from "../stores/hooks/useUserStore";

console.log(trimoTheme);

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
  const userInitialized = useInitialized();

  if (!isAuthorized) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  if (!userInitialized) {
    return <div>Carregando usúario</div>;
  }

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default AppLayout;
