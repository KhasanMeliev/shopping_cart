import React from "react";
import { colors } from "../../assets/styles/colors";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import { Form, Inputs, InputsRow, Wrapper } from "./Contact.style";

const Contact = () => {
  return (
    <Wrapper>
      <Form
        action="https://formsubmit.co/khasanmeliev2@gmail.com"
        method="POST"
      >
        <Inputs>
          <Heading align='center'>Contact me</Heading>
          <InputsRow>
            <input
              type="text"
              placeholder="Name"
              name="name"
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="off"
            />
          </InputsRow>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            autoComplete="off"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
        </Inputs>
        <Button>Send Message</Button>
      </Form>
    </Wrapper>
  );
};

export default Contact;
