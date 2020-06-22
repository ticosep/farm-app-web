import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, DropButton } from "grommet";
import React from "react";
import styled from "styled-components";

import ButtomLink from "../../components/_shared/ButtonLink";
import { mediaQuery } from "../../utils/mediaQuery";

const loginItems = [
  { label: "Email", to: "/login" },
  { label: "Código", to: "login/code" },
];

const mobileItems = [
  { label: "Nova conta", to: "/signup" },
  { label: "Entrar com email", to: "/login" },
  { label: "Entrar com código", to: "login/code" },
];

const LargeBox = styled(Box)`
  display: none;
  flex-direction: row;

  @media ${mediaQuery.lg} {
    display: flex;
  }
`;

const MediumBox = styled(Box)`
  display: flex;
  position: absolute;
  right: 1rem;

  @media ${mediaQuery.md} {
    right: 5rem;
  }

  @media ${mediaQuery.lg} {
    display: none;
  }
`;

const MobileMenuIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const MobileMenu = styled(Box)`
  display: ${(props) => (props.menuActive ? "flex" : "none")};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50px;
  left: 0;

  opacity: ${(props) => (props.menuActive ? "1" : "0")};
`;

const AuthBox = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  React.useEffect(() => {
    setMenuActive(false);
  }, []);

  return (
    <React.Fragment>
      <MediumBox>
        <MobileMenuIcon
          onClick={() => setMenuActive(!menuActive)}
          icon={menuActive ? faTimes : faBars}
        />
        <MobileMenu background="dark-1" menuActive={menuActive}>
          {mobileItems.map(({ label, to }, index) => {
            return (
              <ButtomLink
                onClick={() => setMenuActive(false)}
                margin={{ top: "small" }}
                key={index}
                label={label}
                to={to}
              />
            );
          })}
        </MobileMenu>
      </MediumBox>
      <LargeBox>
        <DropButton
          label="Entrar"
          dropAlign={{ top: "bottom", right: "right" }}
          dropContent={
            <Box flex={true} direction="column" background="dark-1">
              {loginItems.map(({ label, to }, index) => {
                return <ButtomLink key={index} label={label} to={to} />;
              })}
            </Box>
          }
        />
        <ButtomLink primary label="Nova conta" to="/signup" />
      </LargeBox>
    </React.Fragment>
  );
};

export default AuthBox;
