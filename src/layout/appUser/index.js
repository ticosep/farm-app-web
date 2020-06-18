import { Anchor, Box, Button, Header, Nav, Text } from "grommet";
import React from "react";
import { Redirect } from "react-router";

import { useAuthorized, useUserStore } from "../../stores/hooks/useUserStore";
import { useInitialized } from "../../stores/hooks/useUserStore";
import ValidateModal from "../components/ValidateModal";

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
  const [active, setActive] = React.useState("");
  const isAuthorized = useAuthorized();
  const userInitialized = useInitialized();
  const userStore = useUserStore();

  const user = userStore.user;

  if (!isAuthorized) {
    return <Redirect to="/" />;
  }

  if (!userInitialized) {
    return <div>Carregando usúario</div>;
  }

  if (!user.validated) {
    return <ValidateModal id={user.id} email={user.email} />;
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
        <Nav background="brand">
          <SidebarButton
            label="Logout"
            active={"Logout" === active}
            onClick={() => {
              setActive("Logout");
              userStore.logout();
            }}
          />
        </Nav>
        {children}
      </Box>
    </React.Fragment>
  );
};

export default AppLayout;
