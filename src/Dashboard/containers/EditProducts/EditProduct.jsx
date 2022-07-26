import React, { useEffect } from "react";
import { getAllProducts } from "../../../store/product/action";
import { Table, Wrapper } from "./EditProduct.style";
import { useSelector, useDispatch } from "react-redux";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Modal from "../../../components/Modal/Modal";
import useToggle from "../../../hooks/useToggle";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import Heading from "../../../components/Heading/Heading";
import EditModal from "../../../modal/EditProducts/EditModal";
import productApi from "../../../api/productApi";
import swal from "sweetalert";

const Products = () => {
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

  const handleRemove = (productId) => {
    productApi
      .deleteProduct(productId)
      .then((res) => {
        dispatch(getAllProducts());
        swal("", "Mahsulot o'chirildi", "success");
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <Wrapper gap="8px">
      <Heading margin="30px">Mahsulotlar ro'yxati</Heading>
      <Table>
        <thead>
          <tr>
            <th>№</th>
            <th>Nomi</th>
            <th>Narxi</th>
            <th>Tavsifi</th>
            <th>E/D</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td style={{ textAlign: "center", gap: "20px" }}>
                <Button height="30px" onClick={() => handleEdit(product)}>
                  <BiEditAlt />
                </Button>
                <Button height="30px" onClick={() => handleRemove(product.id)}>
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

export default Products;
