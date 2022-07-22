import styled from "styled-components";

const Button = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height || "35px"};
  color: ${({ color }) => color || "white"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#0a69ed"};
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  font-size: ${({ fontSize }) => fontSize};
  border: none;
  border: ${({ border }) => border};
  cursor: pointer;
  outline: none;
`;

export default Button;
