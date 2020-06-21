import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Anchor, Box, Nav, Text } from "grommet";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AuthBox from "../components/AuthBox";
import CustomFooter from "../components/Footer";
import CustomHeader from "../components/Header";

const ChildrenWrapper = styled.div`
  min-height: 466px;
  margin-top: 50px;
`;

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
        <AuthBox />
      </CustomHeader>
      <ChildrenWrapper>{children}</ChildrenWrapper>
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
