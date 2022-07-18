import React from "react";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { First, Image, Texts, Wrapper } from "./About.style";

const About = () => {
  return (
    <Wrapper>
      <Heading style={{ fontSize: "40px" }}>
        Eng yaxshi ovqatlar faqat bizda!
      </Heading>
      <First>
        <Image
          src="https://tarnov.uz/images/Rectangle/abouttop.png"
          alt="palovPic"
        />
        <Texts>
          <Heading>Milliy o'zbek oshxonasi</Heading>
          <Text align="center" fontWeight="bold">
            Ресторан энг янги салатлар ва шўрваларни таклиф этади: анъанавий,
            баҳаратлı, иссиқ, маркали - улар ҳар қандай версияда ажойиб ва ​​ҳар
            ким ўз таъмининг ажойиб комбинациясини топади. Ресторан ёки уйда
            столда таомларимиздан баҳраманд бўлиш ёқимли.
          </Text>
          <Button width="150px" height="40px">
            Menyuni ko'rish
          </Button>
        </Texts>
      </First>
      <First>
        <Texts style={{ gap: "30px", margin: "60px 0px" }}>
          <Heading>Milliy o'zbek oshxonasi</Heading>
          <Text align="center" fontWeight="bold">
            Ресторан энг янги салатлар ва шўрваларни таклиф этади: анъанавий,
            баҳаратлı, иссиқ, маркали - улар ҳар қандай версияда ажойиб ва ​​ҳар
            ким ўз таъмининг ажойиб комбинациясини топади. Ресторан ёки уйда
            столда таомларимиздан баҳраманд бўлиш ёқимли.
          </Text>
          <Button width="150px" height="40px">
            Menyuni ko'rish
          </Button>
        </Texts>
        <Image
          src="https://tarnov.uz/images/Rectangle/aboutbottom.png"
          alt="palovPic"
        />
      </First>
    </Wrapper>
  );
};

export default About;
