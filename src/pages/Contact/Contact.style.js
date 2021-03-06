import styled from "styled-components";
import { colors } from "../../assets/styles/colors";
import { mobile } from "../../assets/styles/sizes";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.main};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 0px;
  gap: 20px;
`;
export const Form = styled.div`
  width: 35%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 30px;
  gap: 20px;
  border-radius: 16px;
  ${mobile} {
    width: 80%;
  }
`;
export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  textarea {
    margin-top: 10px;
    resize: none;
    border: none;
    border: 0.5px solid rgb(171, 164, 164);
    color: ${colors.text};
    border-radius: 5px;
    margin-top: 25px;
    text-indent: 10px;
    outline: none;
    &:focus {
      border: 0.5px solid #0a69ed;
    }
  }
`;

export const InputsRow = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile.lg} {
    flex-direction: column;
    gap: 20px;
  }
  input {
    width: 45%;
    height: 45px;

    ${mobile.lg} {
      width: auto;
    }
  }
`;

export const Phone = styled.div`
  width: 40%;
  height: 300px;
  background-color: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
