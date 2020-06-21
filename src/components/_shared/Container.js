import { mediaQuery } from "../../utils/mediaQuery";

const { default: styled } = require("styled-components");
const { Box } = require("grommet");

export const Container = styled(Box)`
  width: 100%;
  padding: 1rem 1rem;
  flex-direction: column;

  @media ${mediaQuery.md} {
    padding: 1rem 5rem;
  }

  @media ${mediaQuery.lg} {
    padding: 1rem 10rem;
    flex-direction: row;
  }
`;
