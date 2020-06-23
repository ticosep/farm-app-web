import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Header, Image, Nav, Text } from "grommet";
import React from "react";
import { Redirect } from "react-router";
import styled from "styled-components";

import { useAuthorized, useUserStore } from "../../stores/hooks/useUserStore";
import { useInitialized } from "../../stores/hooks/useUserStore";
import { mediaQuery } from "../../utils/mediaQuery";
import FarmSelector from "../components/FarmSelector";
import UserInfo from "../components/UserInfo";
import ValidateModal from "../components/ValidateModal";

const ChildrenWrapper = styled(Box)`
  width: 100vw;
  height: calc(100vh - 60px);
`;

const UserBox = styled(Box)`
  display: none;

  @media ${mediaQuery.lg} {
    display: block;
  }
`;

const UserBoxMobile = styled(Box)`
  display: block;

  @media ${mediaQuery.lg} {
    display: none;
  }
`;

const ContentBox = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media ${mediaQuery.lg} {
    justify-content: flex-start;
    width: auto;
  }
`;

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
      <Box fill direction="row">
        <NavBarBox show={show} background="brand">
          <MenuMobileCloseIcon icon={faTimes} onClick={() => setShow(false)} />
          <Box align="center" justify="center" color="white">
            <Image src={require("../../assets/logo_icon.png")} />
            <Text>Trimo</Text>
            <UserBoxMobile>
              <UserInfo />
            </UserBoxMobile>
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
        <Box fill direction="column">
          <Header height="60px" background="dark-1" pad="medium" gap="none">
            <ContentBox direction="row" align="center" gap="large">
              <MenuIcon onClick={() => setShow(!show)} icon={faBars} />
              <FarmSelector />
            </ContentBox>
            <UserBox>
              <UserInfo />
            </UserBox>
          </Header>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default AppLayout;
