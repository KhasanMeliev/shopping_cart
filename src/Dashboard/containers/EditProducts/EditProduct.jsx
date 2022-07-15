import React from "react";
import { useEffect } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Heading from "../../../components/Heading/Heading";
import { getAllOrders } from "../../../store/order/action";
import { getHour } from "../../../utils/dateUtils";
import { Table, Wrapper } from "./EditProduct.style";
import Button from "../../../components/Button/Button";

const getOrderAsString = (products) => {
  return products.map(
    (product) => `${product.amount}ta ${product.product.name}, `
  );
};

const EditProduct = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <Wrapper>
      <Heading>Buyurtmalar</Heading>
      <Table>
        <thead>
          <tr>
            <th>№</th>
            <th>Ismi</th>
            <th>Narxi</th>
            <th>Vaqti</th>
            <th>Ma'lumotlar</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <tr key={order._id}>
              <td>{index + 1}</td>
              <td>{order.user.username}</td>
              <td>{order.totalPrice}</td>
              <td>{getHour(order.createdAt)}</td>
              <td>{getOrderAsString(order.products)}</td>
              <td>
                <Button>
                  <BsFillPencilFill />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default EditProduct;
