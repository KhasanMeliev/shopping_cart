import React from "react";
import { useSelector } from "react-redux/es/exports";
import "./styles.css";
const Navbar = () => {
  
  const basket = useSelector((state) => state.basket);
  const sum = useSelector((state) => state.sum);

  return (
    <div className="navbar">
      <div className="logo">Shopping cart</div>
      <div className="basket_sum">
        <a href="#basket">
          <h1>BASKET: {basket}</h1>
        </a>
        <h1>SUM: {sum}</h1>
      </div>
    </div>
  );
};

export default Navbar;
