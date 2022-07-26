import styled from "styled-components";
import { colors } from "../../assets/styles/colors";
import { mobile } from "../../assets/styles/sizes";

export const Form = styled.form`
  width: 380px;
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

