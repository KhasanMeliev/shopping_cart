import React, { useState } from "react";
import { useEffect } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Heading from "../../../components/Heading/Heading";
import { getHour } from "../../../utils/dateUtils";
import { Table, Wrapper } from "./EditProduct.style";
import Button from "../../../components/Button/Button";
import useToggle from "../../../hooks/useToggle";
import { getAllProducts } from "../../../store/product/action";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Modal from "../../../components/Modal/Modal";
import EditModal from "../../../modal/EditProducts/EditModal";

const getOrderAsString = (products) => {
  return products.map(
    (product) => `${product.amount}ta ${product.product.name}, `
  );
};

const EditProduct = () => {
  const dispatch = useDispatch();
  const modal = useToggle();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState({});

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const handleEdit = (prod) => {
    setProduct(prod);
    modal.open();
  };

  const handleRemove = (product) => {};

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
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.user.username}</td>
              <td>{product.totalPrice}</td>
              <td>{getHour(product.createdAt)}</td>
              <td>{getOrderAsString(product.products)}</td>
              <td>
                <Button onClick={() => handleEdit(product)}>
                  <BsFillPencilFill />
                </Button>
                <Button onClick={() => handleRemove(product.id)}>
                  <MdOutlineDeleteOutline />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        <EditModal product={product} modal={modal} />
      </Modal>
    </Wrapper>
  );
};

export default EditProduct;
