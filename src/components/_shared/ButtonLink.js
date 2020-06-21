import { Button } from "grommet";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const CustomButton = styled(Button)`
  width: 100%;
  font-size: 1rem;
`;

const ButtonLink = ({ to, label, ...props }) => {
  return (
    <>
      <CustomLink to={to}>
        <CustomButton label={label} {...props} />
      </CustomLink>
    </>
  );
};

export default ButtonLink;
