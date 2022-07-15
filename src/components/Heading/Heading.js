import styled, { css } from "styled-components";
import { colors } from "../../assets/styles/colors";
import { mobile } from "../../assets/styles/sizes";

const headingSize = {
  sm: css`
    font-size: 24px;
  `,
  md: css`
    font-size: 26px;
  `,
  lg: css`
    font-size: 30px;
  `,
};

const Heading = styled.h1`
  ${({ size }) => headingSize[size || "md"]};
  color: ${({ color }) => color || colors.heading.black};
  text-align: ${({ align }) => align};
  margin: 0;

  ${mobile} {
    font-size: 20px;
  }
`;

export default Heading;
