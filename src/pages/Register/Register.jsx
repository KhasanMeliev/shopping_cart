import React, { useState } from "react";
import { Box, Form, Inputs, Wrapper } from "./Register.style";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";

const Register = () => {
  const values = {
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  };
  const [details, setDetails] = useState(values);

  const submitHandler = (e) => {
    e.preventDefault();
    if (details.full_name === "") {
      alert("Ism xato!");
      return false;
    } else if (details.email === "") {
      alert("Email xato!");
      return false;
    } else if (details.phone_number === "") {
      alert("Telefon raqam xato!");
      return false;
    } else if (details.password === "") {
      alert("Password xato!");
      return false;
    } else if (details.confirm_password !== details.password) {
      alert("Passwordni qayta kiriting!");
      return false;
    } else {
      console.log(details);
      return true;
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <Heading margin="0">Ro'yxatdan o'tish</Heading>
        <Inputs>
          <Text margin="0">Full Name</Text>
          <input
            type="text"
            placeholder="Full Name"
            name="full_name"
            autoComplete="off"
            value={details.full_name}
            onChange={(e) => {
              setDetails({ ...details, full_name: e.target.value });
            }}
          />
          <Text margin="0">Email</Text>
          <input
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="off"
            value={details.email}
            onChange={(e) => {
              setDetails({ ...details, email: e.target.value });
            }}
          />
          <Text margin="0">Phone Number</Text>
          <input
            type="tel"
            placeholder="99 999 99 99"
            name="phone_number"
            autoComplete="off"
            value={details.phone_number}
            onChange={(e) => {
              setDetails({ ...details, phone_number: e.target.value });
            }}
          />
          <Text margin="0">Password</Text>
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            value={details.password}
            onChange={(e) => {
              setDetails({ ...details, password: e.target.value });
            }}
          />
          <Text margin="0">Confirm Password</Text>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            autoComplete="off"
            value={details.confirm_password}
            onChange={(e) => {
              setDetails({ ...details, confirm_password: e.target.value });
            }}
          />
        </Inputs>
        <Button
          width="80%"
          height="36px"
          color="#eeeff1"
          fontSize="20px"
          style={{ marginTop: "15px" }}
          type="submit"
        >
          Akkount yaratish
        </Button>
        <Text fontSize="16px" margin="0">
          Akkountingiz mavjudmi?
          <a
            href="/login"
            style={{
              textDecoration: "none",
              color: "#0a69ed",
              marginLeft: "5px",
            }}
          >
            Kirish
          </a>
        </Text>
      </Form>
    </Wrapper>
  );
};

export default Register;
