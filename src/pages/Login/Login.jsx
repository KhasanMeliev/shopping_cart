import React, { useState } from "react";
import Button from "../../components/Button/Button";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import Heading from "../../components/Heading/Heading";
import { Form, Wrapper } from "./Login.style";

const Login = () => {
  const values = { name: "", email: "", password: "" };
  const [details, setDetails] = useState(values);

  const submitHandler = (e) => {
    e.preventDefault();
    if (details.name === null || details.name === "") {
      alert("Name isn't blank!");
      return false;
    } else if (details.email === null || details.email === "") {
      alert("Email isn't blank");
      return false;
    } else if (details.password === null || details.password === "") {
      alert("Password isn't blank");
      return false;
    } else {
      alert("your message succesfully sent");
      console.log(...details);
      return true;
    }
  };

  return (
    <Wrapper>
      <Form
        action="https://formsubmit.co/khasanmeliev2@gmail.com"
        onSubmit={submitHandler}
      >
        <Heading color="white">Login</Heading>
        <FlexBox width="100%" gap="10px">
          <input
            type="text"
            placeholder="Name..."
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            name="name"
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="Email..."
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            name="email"
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Password"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            name="password"
            autoComplete="off"
          />
        </FlexBox>
        <Button
          type="submit"
          width="200px"
          height="40px"
          backgroundColor="white"
          color="#0a69ed"
          fontSize="20px"
        >
          Submit
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Login;
