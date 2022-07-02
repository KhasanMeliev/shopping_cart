import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
