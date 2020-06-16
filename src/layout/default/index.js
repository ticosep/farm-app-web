import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Anchor, Box, Heading, Nav, Text } from "grommet";
import React from "react";
import { Link } from "react-router-dom";

import ButtomLink from "../../components/_shared/ButtonLink";
import CustomFooter from "../components/Footer";
import CustomHeader from "../components/Header";

const items = [
  { label: "Sign in", to: "/login" },
  { label: "Sign up", to: "/signup" },
  { label: "Sign in code", to: "login/code" },
];

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <CustomHeader>
        <Box direction="row" align="center" gap="small">
          <Nav>
            <Link to="/">
              <Anchor
                icon={<FontAwesomeIcon size="lg" icon={faWifi} />}
                color="white"
              />
            </Link>
          </Nav>

          <Text>Trimo</Text>
        </Box>
        <Box direction="row" align="center">
          {items.map(({ label, to }) => (
            <ButtomLink label={label} to={to} />
          ))}
        </Box>
      </CustomHeader>
      {children}

      <CustomFooter>
        <Box flex={true} direction="row" justify="between">
          <Text size="small">
            © Trimo - 2020 | Todos os direitos reservados
          </Text>
        </Box>
      </CustomFooter>
    </React.Fragment>
  );
};

export default DefaultLayout;
