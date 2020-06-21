import { mediaQuery } from "../../utils/mediaQuery";

const { default: styled } = require("styled-components");
const { Box } = require("grommet");

export const Container = styled(Box)`
  padding: 1rem;

  @media ${mediaQuery.md} {
    margin-left: auto;
    margin-right: auto;
    max-width: 550px;
  }

  @media ${mediaQuery.lg} {
    max-width: 1280px;
  }
`;
