import styled from "styled-components";
import { mobile } from "../../assets/styles/sizes";

export const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 0px;
  text-align: center;
`;

export const First = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 25px;

  ${mobile} {
    flex-direction: column;
  }
`;
export const Image = styled.img`
  width: 25%;

  ${mobile} {
    width: 70%;
  }
`;

export const Texts = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  ${mobile} {
    width: 90%;
  }
`;
