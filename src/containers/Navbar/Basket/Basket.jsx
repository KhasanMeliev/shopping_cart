import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import orderApi from "../../../api/orderApi";
import Button from "../../../components/Button/Button";
import Heading from "../../../components/Heading/Heading";
import Text from "../../../components/Text/Text";
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
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const sum = useSelector((state) => state.product.sum);
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState({});

  const selectedOrders = products.filter((prod) => prod.added === true);
  const selectedOrdersId = selectedOrders.map((order) => {
    return { amount: order.amount, productId: order.id };
  });

  useEffect(() => {
    setOrders({
      totalPrice: sum,
      userId: user._id,
      products: selectedOrdersId,
    });
  }, [sum]);

  const handleAdd = (productId, price) => {
    dispatch({ type: "ADD_TO_BASKET", payload: { productId, price } });
  };

  const handleRemove = (productId, price) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { productId, price } });
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();

    orderApi
      .createOrder(orders)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data));
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
                <Image src={prod.picture} alt={prod.name} />
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
        <Link to="/login">
          <Button
            width="300px"
            height="45px"
            color="#0a69ed"
            backgroundColor="white"
            fontSize="20px"
            onClick={handleCreateOrder}
          >
            {sum === 0 ? "Biror narsa harid qiling" : "Buyurtma berish"}
          </Button>
        </Link>
      </TotalPrice>
    </Wrapper>
  );
};

export default Basket;
