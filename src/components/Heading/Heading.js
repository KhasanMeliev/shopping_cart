import styled, { css } from "styled-components";
import { mobile } from "../../assets/sizes/sizes";

const headingSize = {
  sm: css`
    font-size: 25px;
  `,
  md: css`
    font-size: 30px;
  `,
  lg: css`
    font-size: 40px;
  `,
};

const Heading = styled.h1`
  ${({ size }) => headingSize[size || "md"]};
  color: ${({ color }) => color};
  text-indent: ${({ textIndent }) => textIndent};
  text-align: ${({ align }) => align};
  margin: ${({ margin }) => margin};

  ${mobile.lg} {
    font-size: 20px;
    margin: 0;
  }
`;

export default Heading;
