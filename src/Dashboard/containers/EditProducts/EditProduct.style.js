import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const Table = styled.table`
  width: 80%;
  height: auto;
  border-collapse: collapse;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  th {
    padding: 0 10px;
    height: 40px;
    font-weight: 700;
    font-size: 16px;
    border: 1px solid grey;
    background-color: ${colors.background};
  }
  td {
    padding: 2px 10px;
    border: 1px solid grey;
    font-size: 14px;
    font-weight: 500;
  }
  tr {
    background-color: white;
    &:nth-child(even) {
      background-color: ${colors.background};
    }
  }
`;
