import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import Heading from "../../components/Heading/Heading";
import Basket from "../Basket/Basket";
import { NavbarWrapper } from "./Navbar.style";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <NavbarWrapper>
      <Heading>Shopping cart</Heading>

      <FlexBox width="auto" row gap="10px">
        <Basket />
        {isLoggedIn === true ? (
          ""
        ) : (
          <FlexBox row gap="10px">
            <Link to="/login">
              <Button>Kirish</Button>
            </Link>
          </FlexBox>
        )}
      </FlexBox>
    </NavbarWrapper>
  );
};

export default Navbar;
