import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const Input = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${colors.text};
  outline: none;
  border: none;
  border: 0.5px solid rgb(171, 164, 164);
  border-radius: 4px;
  text-indent: 5px;
  font-size: 15px;
  font-family: cursive;
  &:focus {
    border: 1px solid ${colors.main};
  }
`;
