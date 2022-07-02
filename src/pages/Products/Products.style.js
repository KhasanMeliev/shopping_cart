import styled from "styled-components";
import { mobile } from "../../assets/sizes/sizes";
import { FlexBox } from "../../components/FlexBox/FlexBox";

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;


export const Box = styled.div`
  width: 330px;
  height: 420px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  color: black;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  img {
    width: 100%;
    height: 65%;
  }
  ${mobile.lg} {
    width: 80%;
  }
  ${mobile.md} {
    width: 90%;
  }
`;

export const Details = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
`;
export const Price = styled(FlexBox)`
  width: 100%;
  height: 15%;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const CountAmount = styled(FlexBox)`
  gap: 5px;
  flex-direction: row;
`;
