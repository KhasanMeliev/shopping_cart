import React, { useState } from "react";
import { Form, Inputs, Wrapper } from "./Register.style";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";

const Register = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    username: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    authApi
      .register(details)
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <Heading margin="0">Ro'yxatdan o'tish</Heading>
        <Inputs>
          <Text margin="0">Username</Text>
          <input
            type="text"
            placeholder="Username"
            name="username"
            autoComplete="off"
            value={details.username}
            onChange={handleChange}
          />
          <Text margin="0">Phone Number</Text>
          <input
            type="tel"
            placeholder="99 999 99 99"
            name="phoneNumber"
            autoComplete="off"
            value={details.phoneNumber}
            onChange={handleChange}
          />
          <Text margin="0">Password</Text>
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            value={details.password}
            onChange={handleChange}
          />
          <Text margin="0">Confirm Password</Text>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            autoComplete="off"
            value={details.confirmPassword}
            onChange={handleChange}
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
