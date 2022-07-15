import styled from "styled-components";
import { FlexBox } from "../../components/FlexBox/FlexBox";

export const NavbarWrapper = styled(FlexBox)`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  z-index: 1;

  input {
    width: 250px;
    height: 30px;
    text-indent: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
      rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    outline: none;
  }
`;
