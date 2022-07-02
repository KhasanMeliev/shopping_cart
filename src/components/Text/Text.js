import styled from "styled-components";
import { mobile } from "../../assets/sizes/sizes";

const Text = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ fontWeight }) => fontWeight};
  ${mobile.lg} {
    margin: 0;
  }
`;

export default Text;
