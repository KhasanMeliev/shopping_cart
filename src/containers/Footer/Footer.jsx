import React from "react";
import Heading from "../../components/Heading/Heading";
import { Icons, Wrapper } from "./Footer.style";
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import Text from "../../components/Text/Text";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <Heading size="lg">Footer</Heading>
      <FlexBox row gap="35px" style={{ flexWrap: "wrap" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Text>Asosiy</Text>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <Text>Biz haqimizda</Text>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Text>Aloqa</Text>
        </Link>
      </FlexBox>
      <Icons>
        <a href="https://www.instagram.com/coding_khasan/" target="blank">
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCzxxp-R3-05kx_SbYXdrahQ"
          target="blank"
        >
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/in/khasan-meliev/" target="blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/KhasanMeliev" target="blank">
          <FaGithub />
        </a>
      </Icons>
      <Text size="sm">made by khasanmeliev</Text>
    </Wrapper>
  );
};

export default Footer;
