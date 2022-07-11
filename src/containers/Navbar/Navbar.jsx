import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import Text from "../../components/Text/Text";
import {
  NavbarWrapper,
  Logo,
  Basket,
  DropdownContent,
  Box,
  Image,
} from "./Navbar.style";

const Navbar = () => {
  const products = useSelector((state) => state.product.products);

  const dispatch = useDispatch();

  const handleAdd = (productId, price) => {
    dispatch({ type: "ADD_TO_BASKET", payload: { productId, price } });
  };

  const handleRemove = (productId, price) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { productId, price } });
  };

  const sumOfAmounts = products
    .map((p) => p.amount)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <NavbarWrapper>
      <Logo>Shopping cart</Logo>
      <Basket>
        <FaShoppingCart style={{ fontSize: "30px" }} />
        <FlexBox
          width="25px"
          height="25px"
          style={{
            backgroundColor: "white",
            position: "relative",
            top: "-18px",
            right: "30px",
            borderRadius: "50%",
          }}
        >
          <Text style={{ color: "#0a69ed" }}>{sumOfAmounts}</Text>
          <DropdownContent>
            {products.map(
              (prod) =>
                prod.added && (
                  <Box>
                    <Image
                      src="https://media.istockphoto.com/photos/fresh-manti-picture-id518523704?k=20&m=518523704&s=612x612&w=0&h=h6yy8Bnwi7l2ORr18cRcw6aYhda5K0pfZcUEglkbKkE="
                      alt={prod.name}
                    />
                    <FlexBox width="">

                    </FlexBox>
                  </Box>
                )
            )}
          </DropdownContent>
        </FlexBox>
      </Basket>
    </NavbarWrapper>
  );
};

export default Navbar;
