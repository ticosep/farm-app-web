import {
  faBars,
  faSignOutAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Header, Image, Text } from "grommet";
import React from "react";
import { Redirect } from "react-router";
import styled from "styled-components";

import { useAuthorized, useUserStore } from "../../stores/hooks/useUserStore";
import { useInitialized } from "../../stores/hooks/useUserStore";
import { mediaQuery } from "../../utils/mediaQuery";
import FarmsMenu from "../components/FarmsMenu";
import { SidebarButton, buttons } from "../components/SideBarButtons";
import UserInfo from "../components/UserInfo";
import ValidateModal from "../components/ValidateModal";

const ChildrenWrapper = styled(Box)`
  width: 100vw;
  height: calc(100vh - 60px);
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
  width: 250px;
  height: 100%;
  top: 0;
  padding: 1rem 0;
  position: absolute;
  align-items: center;

  z-index: 10;

  @media ${mediaQuery.lg} {
    position: relative;
    height: auto;
    left: 0;
  }
`;

const ExitBox = styled(Box)`
  position: absolute;
  bottom: 1rem;
  left: 0;
`;

const AppLayout = ({ children }) => {
  const [active, setActive] = React.useState("");
  const [show, setShow] = React.useState(false);

  const isAuthorized = useAuthorized();
  const userInitialized = useInitialized();
  const userStore = useUserStore();

  const { user } = userStore;

  if (!isAuthorized) {
    return <Redirect to="/" />;
  }

  if (!userInitialized) {
    return <div>Carregando usúario</div>;
  }

  if (!user.validated) {
    return <ValidateModal id={user.id} email={user.email} />;
  }

  // Filter the buttons to rest only the ones that the user can access
  const userButtons = buttons.filter(({ isAllowed }) => {
    return isAllowed(user);
  });

  return (
    <React.Fragment>
      <Box fill direction="row">
        <NavBarBox show={show} background="brand">
          <MenuMobileCloseIcon icon={faTimes} onClick={() => setShow(false)} />
          {userButtons.map(({ label, icon, to }) => {
            return (
              <SidebarButton
                label={label}
                active={label === active}
                icon={icon}
                to={to}
                onClick={() => {
                  setActive(label);
                }}
              />
            );
          })}
          <ExitBox>
            <SidebarButton
              label="Sair"
              active={"Sair" === active}
              icon={faSignOutAlt}
              to="/"
              onClick={() => {
                userStore.logout();
              }}
            />
          </ExitBox>
        </NavBarBox>
        <Box fill direction="column">
          <Header
            height="60px"
            justify="between"
            align="center"
            direction="row"
            background="dark-1"
            pad="medium"
            gap="none"
          >
            <MenuIcon onClick={() => setShow(!show)} icon={faBars} />
            <Box direction="row" align="center" color="white">
              <Image src={require("../../assets/logo_icon.svg")} />
              <Text weight="bold">Trimo</Text>
            </Box>
            <Box direction="row" align="center" gap="small">
              <FarmsMenu />
              <UserInfo />
            </Box>
          </Header>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default AppLayout;
