import React from "react";
import { useSelector } from "react-redux/es/exports";
import Button from "../../components/Button/Button";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import Heading from "../../components/Heading/Heading";
import { Logo, NavbarWrapper, Price } from "./Navbar.style";

const Navbar = () => {
  const sum = useSelector((state) => state.sum);
  const products = useSelector((state) => state.products);

  const sumOfAmounts = products
    .map((p) => p.amount)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <NavbarWrapper>
      <Logo>Shopping cart</Logo>
      <FlexBox flexDirection="row" gap="20px">
        <a href="#basket" style={{ textDecoration: "none", color: "white" }}>
          <Heading margin="0">BASKET: {sumOfAmounts || "0"}</Heading>
        </a>
        <Heading margin="0"> SUM: {sum}</Heading>
      </FlexBox>
      <FlexBox flexDirection="row" gap="10px">
        <a href="/login">
          <Button
            width="120px"
            height="35px"
            backgroundColor="white"
            color="#0a69ed"
            fontSize="20px"
          >
            Kirish
          </Button>
        </a>
        <a href="/register">
          <Button
            width="200px"
            height="35px"
            backgroundColor="white"
            color="#0a69ed"
            fontSize="20px"
          >
            Ro'yxatdan o'tish
          </Button>
        </a>
      </FlexBox>
    </NavbarWrapper>
  );
};

export default Navbar;
