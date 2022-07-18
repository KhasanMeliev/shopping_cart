import React, { useState } from "react";
import { Form } from "./EditModal.style";
import { useDispatch } from "react-redux";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import { Input } from "../../components/Input/Input";
import { colors } from "../../assets/styles/colors";
import productApi from "../../api/productApi";
import { getAllProducts } from "../../store/product/action";

const EditModal = ({ product, modal }) => {
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    productApi.editProduct(product.id, values).then((res) => {
      dispatch(getAllProducts());
      modal.close();
    });
    alert("sucess");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form key={product.id} onSubmit={handleSubmit}>
      <Heading>Kirish</Heading>
      <FlexBox>
        <Text>Mahsulot Nomi</Text>
        <Input
          type="text"
          placeholder="Mahsulot nomi"
          name="name"
          autoComplete="off"
          value={product.name}
          onChange={handleChange}
          height="30px"
        />

        <Text>Mahsulot Narxi</Text>
        <Input
          type="number"
          placeholder="Mahsulot Narxi"
          name="price"
          autoComplete="off"
          value={product.price}
          onChange={handleChange}
          height="30px"
        />
        <Text>Mahsulot Surati </Text>
        <Input
          type="text"
          placeholder="Mahsulot Surati"
          name="picture"
          autoComplete="off"
          value={product.picture}
          onChange={handleChange}
          height="30px"
        />
        <Text>Mahsulot Tavsifi </Text>
        <Input
          type="text"
          placeholder="Mahsulot Tavsifi"
          name="description"
          autoComplete="off"
          value={product.description}
          onChange={handleChange}
          height="30px"
        />
      </FlexBox>
      <Button height="36px" style={{ marginTop: "15px" }} type="submit">
        Akkount yaratish
      </Button>
      <Text fontSize="16px">
        Akkountingiz yo'qmi?
        <a
          href="/register"
          style={{
            textDecoration: "none",
            color: `${colors.main}`,
            marginLeft: "5px",
          }}
        >
          Ro'yxatdan o'tish
        </a>
      </Text>
    </Form>
  );
};

export default EditModal;
