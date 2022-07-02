import React, { useState } from "react";
import { Box, Form, Inputs, Wrapper } from "./Login.style";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";

const Login = () => {
  const values = {
    email: "",
    password: "",
  };
  const [details, setDetails] = useState(values);

  const submitHandler = (e) => {
    e.preventDefault();
    if (details.email === "") {
      alert("Email xato!");
      return false;
    } else if (details.password === "") {
      alert("Password xato!");
      return false;
    } else {
      console.log(details);
      return true;
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <Heading margin="0">Kirish</Heading>
        <Inputs>
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
          Akkountingiz yo'qmi?
          <a
            href="/register"
            style={{
              textDecoration: "none",
              color: "#0a69ed",
              marginLeft: "5px",
            }}
          >
            Ro'yxatdan o'tish
          </a>
        </Text>
      </Form>
    </Wrapper>
  );
};

export default Login;
