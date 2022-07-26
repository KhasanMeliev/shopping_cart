import React, { useState } from "react";
import { Form, Inputs, Wrapper } from "./Register.style";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import { colors } from "../../assets/styles/colors";
import { Input } from "../../components/Input/Input";
import swal from "sweetalert";

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
        swal("", "Siz muvaffaqiyatli ro'yxatdan o'tdingiz!", "success");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => {
        swal("", `${err.response.data.message}`, "error");
      });
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
          />
          <Text>Phone Number</Text>
          <Input
            type="tel"
            placeholder="99 999 99 99"
            name="phoneNumber"
            autoComplete="off"
            value={details.phoneNumber}
            onChange={handleChange}
          />
          <Text>Password</Text>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            value={details.password}
            onChange={handleChange}
          />
          <Text>Confirm Password</Text>
          <Input
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
