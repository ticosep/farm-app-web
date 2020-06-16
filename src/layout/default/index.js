import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Anchor, Box, Nav, Text } from "grommet";
import React from "react";
import { Link } from "react-router-dom";

import ButtomLink from "../../components/_shared/ButtonLink";
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
        <Box direction="row" align="center" gap="small">
          <Nav direction="row">
            {items.map(({ label, to }) => (
              <ButtomLink label={label} to={to} />
            ))}
          </Nav>
        </Box>
      </CustomHeader>
      {children}
    </React.Fragment>
  );
};

export default DefaultLayout;
