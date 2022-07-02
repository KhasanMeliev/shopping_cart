import styled from "styled-components";
import { FlexBox } from "../FlexBox/FlexBox";

export const Wrapper = styled(FlexBox)`
  width: 100%;
  height: auto;
  margin-top: 50px;
  padding: 30px 0;
  flex-direction: row;
`;
export const Form = styled(FlexBox)`
  width: 400px;
  height: 350px;
  background-color: #0a69ed;
  justify-content: space-around;
  flex-direction: column;
  box-sizing: border-box;
  input {
    width: 80%;
    height: 35px;
    border: none;
    outline: none;
    color: #0a69ed;
    text-indent: 10px;
    border-radius: 2px;
  }
`;
