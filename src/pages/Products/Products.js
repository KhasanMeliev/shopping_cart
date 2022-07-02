import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import {
  Box,
  CountAmount,
  Details,
  FoodDrink,
  Price,
  Wrapper,
} from "./Products.style";

const Products = () => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const handleAdd = (productId, price) => {
    dispatch({ type: "ADD_TO_BASKET", payload: { productId, price } });
  };
  const handleRemove = (productId, price) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { productId, price } });
  };

  return (
    <Wrapper>
      {products.map((product) => (
        <Box key={product.id}>
          <img src={product.img} alt={product.name} />
          <Details>
            <Heading textIndent="20px" margin="0">
              {product.name} {product.amount > 0 ? `- ${product.amount}` : ""}
            </Heading>
          </Details>
          <Price>
            <Heading textIndent="20px" fontSize="22px">
              {product.price} so'm
            </Heading>
            {product.amount === 0 ? (
              <Button
                onClick={() => handleAdd(product.id, product.price)}
                width="120px"
                height="40px"
                fontSize="16px"
              >
                Add to Cart
              </Button>
            ) : (
              <CountAmount>
                <Button
                  onClick={() => handleRemove(product.id, product.price)}
                  width="60px"
                  height="40px"
                  fontSize="16px"
                >
                  -
                </Button>
                <Text fontSize="20px">{product.amount}</Text>
                <Button
                  onClick={() => handleAdd(product.id, product.price)}
                  width="60px"
                  height="40px"
                  fontSize="16px"
                >
                  +
                </Button>
              </CountAmount>
            )}
          </Price>
        </Box>
      ))}
    </Wrapper>
  );
};

export default Products;
