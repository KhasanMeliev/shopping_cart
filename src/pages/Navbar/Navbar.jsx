import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Button from "../../components/Button/Button";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import Text from "../../components/Text/Text";
import {
  Basket,
  Box,
  CountAmount,
  DropdownContent,
  Image,
  ItemName,
  Logo,
  NavbarWrapper,
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
                  <Box key={prod.id}>
                    <FlexBox width="30%">
                      <Image src={prod.img} alt={prod.name} />
                    </FlexBox>
                    <FlexBox width="70%" height="100%">
                      <ItemName>
                        <Text fontSize="23px">{prod.name}</Text>
                        <AiFillDelete />
                      </ItemName>
                      <CountAmount>
                        <Button
                          onClick={() => handleRemove(prod.id, prod.price)}
                          width="30px"
                          height="20px"
                          fontSize="15px"
                        >
                          -
                        </Button>
                        <Text fontSize="18px">{prod.amount}</Text>
                        <Button
                          onClick={() => handleAdd(prod.id, prod.price)}
                          width="30px"
                          height="20px"
                          fontSize="15px"
                        >
                          +
                        </Button>
                      </CountAmount>
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
