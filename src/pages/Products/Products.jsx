import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { getAllProducts } from "../../store/actions/productActions";
import { Box, CountAmount, Details, Price, Wrapper } from "./Products.style";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const handleAdd = (productId, price) => {
    dispatch({ type: "ADD_TO_BASKET", payload: { productId, price } });
  };
  const handleRemove = (productId, price) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { productId, price } });
  };

  return (
    <Wrapper>
      {products?.map((product) => (
        <Box key={product.id}>
          <img src={product.picture} alt={product.name} />
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
