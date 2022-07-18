import React from "react";
import { colors } from "../../assets/styles/colors";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import { Input } from "../../components/Input/Input";
import { Form, Inputs, InputsRow, Wrapper } from "./Contact.style";

const Contact = () => {
  return (
    <Wrapper>
      <Form
        action="https://formsubmit.co/khasanmeliev2@gmail.com"
        method="POST"
      >
        <Inputs>
          <Heading align="center">Contact me</Heading>
          <InputsRow>
            <Input
              type="text"
              placeholder="Name"
              name="name"
              autoComplete="off"
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="off"
            />
          </InputsRow>
          <Input
            type="text"
            placeholder="Subject"
            name="subject"
            autoComplete="off"
            height="45px"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
        </Inputs>
        <Button width="180px" height="50px" fontSize="18px">
          Send Message
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Contact;
