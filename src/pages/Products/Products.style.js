import styled from "styled-components";
import { colors } from "../../assets/styles/colors";
import { mobile } from "../../assets/styles/sizes";
import { FlexBox } from "../../components/FlexBox/FlexBox";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
  padding: 30px 40px;
  box-sizing: border-box;
  flex-direction: column;
  input {
    width: 350px;
    height: 40px;
    border: none;
    border-radius: 8px;
    outline: none;
    text-indent: 10px;
    color: ${colors.text.black};
  }
`;

export const Card = styled.div`
  width: 330px;
  height: 400px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: white;

  ${mobile} {
    width: 80%;
  }
`;

export const CardMedia = styled.img`
  width: 100%;
  height: 60%;
`;

export const CardDetails = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  gap: 25px;
`;

export const CountAmount = styled(FlexBox)`
  gap: 5px;
  flex-direction: row;
`;
