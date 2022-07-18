import React, { useState } from "react";
import { Form, Inputs, Wrapper } from "./Login.style";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import { colors } from "../../assets/styles/colors";
import { Input } from "../../components/Input/Input";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    phoneNumber: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    authApi
      .login(details)
      .then((res) => {
        localStorage.setItem("token", res.data.user.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        dispatch({ type: "LOGIN", payload: res.data.user });
        navigate("/");
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <Heading>Kirish</Heading>
        <Inputs>
          <Text>Phone number</Text>
          <Input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            autoComplete="off"
            value={details.phoneNumber}
            onChange={(e) => {
              setDetails({ ...details, phoneNumber: e.target.value });
            }}
            height="30px"
          />

          <Text>Password</Text>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            value={details.password}
            onChange={(e) => {
              setDetails({ ...details, password: e.target.value });
            }}
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
    </Wrapper>
  );
};

export default Login;
