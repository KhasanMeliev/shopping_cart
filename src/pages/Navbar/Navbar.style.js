import styled from "styled-components";
import { mobile } from "../../assets/sizes/sizes";
import { FlexBox } from "../../components/FlexBox/FlexBox";

export const NavbarWrapper = styled(FlexBox)`
  width: 100%;
  height: 80px;
  background-color: #0a69ed;
  color: white;
  justify-content: space-around;
`;

export const Logo = styled.div`
  font-size: 40px;
  font-weight: bold;
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  text-indent: 40px;
  ${mobile.lg} {
    font-size: 25px;
  }
`;

export const Price = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-end;
  padding: 25px;
  box-sizing: border-box;
  a {
    text-decoration: none;
    color: inherit;
  }
 
`;
