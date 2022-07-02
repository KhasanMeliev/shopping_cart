import React from "react";
import { useSelector } from "react-redux/es/exports";
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
      <Price>
        <a href="#basket">
          <Heading margin="0" >BASKET: {sumOfAmounts}</Heading>
        </a>
        <Heading margin="0">SUM: {sum}</Heading>
      </Price>
    </NavbarWrapper>
  );
};

export default Navbar;
