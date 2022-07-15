import React, { useState } from "react";
import { SidebarToggler, StyledLink, Wrapper } from "./Sidebar.style";
import IconToggler from "../../../assets/img/sidebar_icon.svg";
import { FaUsers } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import Heading from "../../../components/Heading/Heading";
import Text from "../../../components/Text/Text";
import { colors } from "../../../assets/styles/colors";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <SidebarToggler isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <img src={IconToggler} alt="icon" />
      </SidebarToggler>
      {isOpen ? (
        <Heading color={colors.heading.white}>Admin</Heading>
      ) : (
        <Heading color={colors.heading.white}>A</Heading>
      )}
      <StyledLink to="/admin/orders">
        <FaUsers />
        {isOpen && <Text color={colors.text.white}>Orders</Text>}
      </StyledLink>
      <StyledLink to="/admin/editproducts">
        <BsFillPencilFill />
        {isOpen && <Text color={colors.text.white}>Edit Products</Text>}
      </StyledLink>
      <StyledLink to="/admin/createproducts">
        <AiFillPlusCircle />
        {isOpen && <Text color={colors.text.white}>Edit Products</Text>}
      </StyledLink>
    </Wrapper>
  );
};

export default Sidebar;
