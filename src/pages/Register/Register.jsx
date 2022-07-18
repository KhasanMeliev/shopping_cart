import React, { useState } from "react";
import { Form, Inputs, Wrapper } from "./Register.style";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import { colors } from "../../assets/styles/colors";
import { Input } from "../../components/Input/Input";

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
        navigate("/login");
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <Heading>Ro'yxatdan o'tish</Heading>
        <Inputs>
          <Text>Username</Text>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            autoComplete="off"
            value={details.username}
            onChange={handleChange}
            height="30px"
          />
          <Text>Phone Number</Text>
          <Input
            type="tel"
            placeholder="99 999 99 99"
            name="phoneNumber"
            autoComplete="off"
            value={details.phoneNumber}
            onChange={handleChange}
            height="30px"
          />
          <Text>Password</Text>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            value={details.password}
            onChange={handleChange}
            height="30px"
          />
          <Text>Confirm Password</Text>
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            autoComplete="off"
            value={details.confirmPassword}
            onChange={handleChange}
            height="30px"
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
              color: `${colors.main}`,
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
