import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width && "100%"};
  height: ${({ height }) => height};
`;
