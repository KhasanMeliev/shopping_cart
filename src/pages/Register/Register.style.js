import styled from "styled-components";
import { colors } from "../../assets/styles/colors";
import { mobile } from "../../assets/styles/sizes";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.main};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Form = styled.form`
  width: 30%;
  height: 470px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 16px;
  padding: 20px;
  ${mobile} {
    width: 80%;
  }
`;

export const Inputs = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    font-weight: 500;
  }
`;
