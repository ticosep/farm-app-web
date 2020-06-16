import { Button } from "grommet";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const ButtonLink = ({ to, label, ...props }) => {
  return (
    <>
      <CustomLink to={to}>
        <Button label={label} {...props} />
      </CustomLink>
    </>
  );
};

export default ButtonLink;
