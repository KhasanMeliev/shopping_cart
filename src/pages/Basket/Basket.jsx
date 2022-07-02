import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import {
  Wrapper,
  Title,
  Box,
  Image,
  TotalPrice,
  CountAmount,
  Price,
  NameImg,
} from "./Basket.style";

const Basket = () => {
  const products = useSelector((state) => state.products);
  const sum = useSelector((state) => state.sum);

  const dispatch = useDispatch();

  const handleAdd = (productId, price) => {
    dispatch({ type: "ADD_TO_BASKET", payload: { productId, price } });
  };

  const handleRemove = (productId, price) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { productId, price } });
  };

  return (
    <Wrapper id="basket">
      <Title>
        <Heading color="white">BASKET</Heading>
      </Title>
      {products.map(
        (prod) =>
          prod.added && (
            <Box key={prod.id}>
              <NameImg>
                <Image src={prod.img} alt={prod.name} />
                <Text fontSize="28px" fontWeight="bold">
                  {prod.name}
                </Text>
              </NameImg>
              <Price>
                <Heading>{prod.price} - so'm</Heading>
                <CountAmount>
                  <Button
                    onClick={() => handleRemove(prod.id, prod.price)}
                    width="60px"
                    height="40px"
                    fontSize="20px"
                  >
                    -
                  </Button>
                  <Text fontSize="25px">{prod.amount}</Text>
                  <Button
                    onClick={() => handleAdd(prod.id, prod.price)}
                    width="60px"
                    height="40px"
                    fontSize="20px"
                  >
                    +
                  </Button>
                </CountAmount>
                <Heading color="#0004ff">
                  {prod.price * prod.amount} - so'm
                </Heading>
              </Price>
            </Box>
          )
      )}
      <TotalPrice>
        <Heading color="white">Total Price - {sum} so'm </Heading>
        <a href="/register">
          <Button
            width="300px"
            height="45px"
            color="#0a69ed"
            backgroundColor="white"
            fontSize="20px"
          >
            {sum === 0 ? "Biror narsa harid qiling" : "Buyurtma berish"}
          </Button>
        </a>
      </TotalPrice>
    </Wrapper>
  );
};

export default Basket;
