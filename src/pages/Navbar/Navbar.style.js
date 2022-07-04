import styled from "styled-components";
import { mobile } from "../../assets/sizes/sizes";
import { FlexBox } from "../../components/FlexBox/FlexBox";

export const NavbarWrapper = styled(FlexBox)`
  width: 100%;
  height: 80px;
  background-color: #0a69ed;
  color: white;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  z-index: 1;
  ${mobile.lg} {
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  font-size: 40px;
  font-weight: bold;
  height: 100%;
  display: flex;
  align-items: center;
  text-indent: 40px;
  ${mobile.lg} {
    font-size: 25px;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  width: 350px;
  height: 400px;
  background-color: red;
  position: absolute;
  top: 50px;
  right: 5px;
`;

export const Basket = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover ${DropdownContent} {
    display: block;
  }
  ${mobile.lg} {
    background-color: #0a69ed;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 100px;
  background-color: green;
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

export const Image = styled.img`
  width: 100%;
  height: 100%;
  ${mobile.lg} {
    width: 200px;
    height: 200px;
  }
`;

export const ItemName = styled.div`
  width: 90%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    font-size: 20px;
    cursor: pointer;
    &:hover {
      transform: rotate(360deg);
    }
  }
`;

export const CountAmount = styled(FlexBox)`
  flex-direction: row;
`;
