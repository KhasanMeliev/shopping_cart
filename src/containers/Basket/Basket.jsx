import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import Button from "../../components/Button/Button";
import { Badge, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  BasketWrapper,
  CardDetails,
  CardItem,
  CardMedia,
  DropdownContent,
} from "./Basket.style";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { useNavigate } from "react-router-dom";
import orderApi from "../../api/orderApi";
import { getAllProducts } from "../../store/product/action";

const Basket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  const sum = useSelector((state) => state.product.sum);
  const user = useSelector((state) => state.user);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [orders, setOrders] = useState({});

  const handleAdd = (productId, price) => {
    dispatch({ type: "ADD_TO_BASKET", payload: { productId, price } });
  };

  const handleRemove = (productId, price) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { productId, price } });
  };

  const selectedOrders = products.filter((product) => product.added === true);

  const selectedOrdersId = selectedOrders.map((order) => {
    return { amount: order.amount, product: order.id };
  });

  const sumOfAmount = products
    .map((p) => p.amount)
    .reduce((prev, cur) => prev + cur, 0);

  useEffect(() => {
    setOrders({
      totalPrice: sum,
      user: user._id,
      products: selectedOrdersId,
    });
  }, [sum]);

  const createOrder = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert("Buyurtma berish uchun avval saytga kirishingiz kerak!");
      navigate("/login");
    } else {
      orderApi
        .createOrder(orders)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.response.data));
      dispatch(getAllProducts());
    }
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 3,
      top: 5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      backgroundColor: "#0a69ed",
    },
  }));

  return (
    <BasketWrapper>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={sumOfAmount} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <FlexBox>
        <DropdownContent>
          {sum === 0 ? (
            <Heading>Savatda hozircha hech nima yo'q</Heading>
          ) : (
            products.map(
              (prod) =>
                prod.added && (
                  <CardItem>
                    <CardMedia src={prod.picture} alt={prod.name} />
                    <CardDetails>
                      <Heading style={{ fontWeight: "400" }}>
                        {prod.name}
                      </Heading>

                      <FlexBox width="100%" row gap="3px" justify="start">
                        <Button
                          onClick={() => handleRemove(prod.id, prod.price)}
                          width="30px"
                          height="30px"
                          fontSize="20px"
                        >
                          -
                        </Button>
                        <Text>{prod.amount}</Text>
                        <Button
                          onClick={() => handleAdd(prod.id, prod.price)}
                          width="30px"
                          height="30px"
                          fontSize="20px"
                        >
                          +
                        </Button>
                        <Text
                          fontSize="17px"
                          style={{ marginLeft: "20px", fontWeight: "bold" }}
                        >
                          {prod.price * prod.amount} so'm
                        </Text>
                      </FlexBox>
                    </CardDetails>
                  </CardItem>
                )
            )
          )}
          <Button
            width="90%"
            height="40px"
            style={{ display: "block", margin: "0 auto" }}
            onClick={createOrder}
          >
            {sumOfAmount === 0 ? "Mahsulot tanlang" : `Buturtma berish ${sum}`}
          </Button>
        </DropdownContent>
      </FlexBox>
    </BasketWrapper>
  );
};

export default Basket;
