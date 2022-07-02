import styled from "styled-components";
import { mobile } from "../../assets/sizes/sizes";
import { FlexBox } from "../../components/FlexBox/FlexBox";

export const Wrapper = styled.div`
  width: 90%;
  background-color: #0a69ed;
  margin-top: 80px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${mobile.lg} {
    width: 90%;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid white;
`;

export const Box = styled.div`
  width: 95%;
  height: 110px;
  background-color: white;
  margin-top: 10px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;

  ${mobile.lg} {
    height: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const NameImg = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  p {
    margin-left: 5px;
  }
  ${mobile.lg} {
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 100%;
  ${mobile.lg} {
    width: 200px;
    height: 200px;
  }
`;

export const Price = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 100px;
  box-sizing: border-box;

  ${mobile.lg} {
    flex-direction: column;
    margin: 20px 0px;
    gap: 15px;
    width: 100%;
    justify-content: center;
    padding: 5px;
  }
`;

export const CountAmount = styled(FlexBox)`
  height: 100%;
  flex-direction: row;
  gap: 12px;
  ${mobile.lg} {
  }
`;

export const TotalPrice = styled(FlexBox)`
  width: 100%;
  background-color: #0a69ed;
  padding: 20px;
  box-sizing: border-box;
  ${mobile.lg} {
    gap: 20px;
  }
`;
