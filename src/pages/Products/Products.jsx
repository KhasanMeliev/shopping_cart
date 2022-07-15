import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiSearchAlt2 } from "react-icons/bi";
import Button from "../../components/Button/Button";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { getAllProducts } from "../../store/product/action";
import {
  Card,
  CardDetails,
  CardMedia,
  CountAmount,
  SearchIcon,
  Wrapper,
} from "./Products.style";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  console.log(products);
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
      <FlexBox row>
        <input type="search" placeholder="Search..." />
        <SearchIcon>
          <BiSearchAlt2 />
        </SearchIcon>
      </FlexBox>
      <FlexBox row flexWrap="wrap" style={{ marginTop: "20px" }}>
        {products?.map((product) => (
          <Card key={product.id}>
            <CardMedia src={product.picture} alt={product.name} />
            <CardDetails>
              <Heading>{product.name}</Heading>
              <FlexBox row gap="4px" justify="space-between">
                <Heading>{product.price} so'm</Heading>
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
                      width="40px"
                      height="40px"
                      fontSize="16px"
                    >
                      -
                    </Button>
                    <Text fontSize="20px">{product.amount}</Text>
                    <Button
                      onClick={() => handleAdd(product.id, product.price)}
                      width="40px"
                      height="40px"
                      fontSize="16px"
                    >
                      +
                    </Button>
                  </CountAmount>
                )}
              </FlexBox>
            </CardDetails>
          </Card>
        ))}
      </FlexBox>
    </Wrapper>
  );
};

export default Products;
