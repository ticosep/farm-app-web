import { Button } from "grommet";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled(Link)`
  text-decoration: none;
`;
const CustomButton = styled(Button)`
  font-size: 1rem;
  border: 0;
`;

const ButtonLink = ({ to, label, ...props }) => {
  return (
    <>
      <CustomLink to={to}>
        <CustomButton color="white" label={label} {...props} />
      </CustomLink>
    </>
  );
};

export default ButtonLink;
