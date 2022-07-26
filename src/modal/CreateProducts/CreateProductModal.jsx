import React, { useState } from "react";
import { Form } from "./EditModal.style";
import { useDispatch } from "react-redux";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import { Input } from "../../components/Input/Input";
import productApi from "../../api/productApi";
import { getAllProducts } from "../../store/product/action";
import swal from "sweetalert";

const CreateProducts = ({ product, modal }) => {
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    productApi.editProduct(product.id, values).then((res) => {
      dispatch(getAllProducts());
      modal.close();
    });
    swal("", "Mahsulot muvafaqqiyatli yaratildi!", "success");
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
      <Heading>Tahrirlash</Heading>
      <FlexBox>
        <Text>Mahsulot Nomi</Text>
        <Input
          type="text"
          placeholder="Mahsulot nomi"
          name="name"
          autoComplete="off"
          onChange={handleChange}
        />

        <Text>Mahsulot Narxi</Text>
        <Input
          type="number"
          placeholder="Mahsulot Narxi"
          name="price"
          autoComplete="off"
          onChange={handleChange}
        />
        <Text>Mahsulot Surati </Text>
        <Input
          type="text"
          placeholder="Mahsulot Surati"
          name="picture"
          autoComplete="off"
          onChange={handleChange}
        />
        <Text>Mahsulot Tavsifi </Text>
        <Input
          type="text"
          placeholder="Mahsulot Tavsifi"
          name="description"
          autoComplete="off"
          onChange={handleChange}
        />
      </FlexBox>

      <Button width="40%" height="36px" type="submit">
        Yaratish
      </Button>
    </Form>
  );
};

export default CreateProducts;
