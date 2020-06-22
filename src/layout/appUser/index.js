import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Anchor, Box, Button, Header, Image, Nav, Text } from "grommet";
import React from "react";
import { Redirect } from "react-router";
import styled from "styled-components";

import { useAuthorized, useUserStore } from "../../stores/hooks/useUserStore";
import { useInitialized } from "../../stores/hooks/useUserStore";
import { mediaQuery } from "../../utils/mediaQuery";
import ValidateModal from "../components/ValidateModal";

const items = [
  { label: "HTML", href: "#" },
  { label: "JS", href: "#" },
  { label: "CSS", href: "#" },
  { label: "REACT", href: "#" },
];

const MenuIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const MenuMobileCloseIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  display: block;
  position: absolute;
  right: 1rem;

  @media ${mediaQuery.lg} {
    display: none;
  }
`;

const NavBarBox = styled(Box)`
  display: ${(props) => (props.show ? "flex" : "none")};
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 100%;
  position: absolute;
  top: 0;

  z-index: 10;

  @media ${mediaQuery.lg} {
    position: relative;
    height: auto;
    left: 0;
  }
`;

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
  const [show, setShow] = React.useState(false);

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
          <MenuIcon onClick={() => setShow(!show)} icon={faBars} />
        </Box>
        <Nav direction="row">
          {items.map((item) => (
            <Anchor href={item.href} label={item.label} key={item.label} />
          ))}
        </Nav>
      </Header>
      <Box fill direction="row">
        <NavBarBox show={show} background="brand">
          <MenuMobileCloseIcon icon={faTimes} onClick={() => setShow(false)} />
          <Box align="center" color="white">
            <Image src={require("../../assets/logo_icon.png")} />
            <Text>Trimo</Text>
          </Box>
          <SidebarButton
            label="Logout"
            active={"Logout" === active}
            onClick={() => {
              setActive("Logout");
              userStore.logout();
            }}
          />
        </NavBarBox>
        {children}
      </Box>
    </React.Fragment>
  );
};

export default AppLayout;
