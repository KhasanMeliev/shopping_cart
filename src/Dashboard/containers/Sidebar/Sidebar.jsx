import React, { useState } from "react";
import { SidebarToggler, StyledLink, Wrapper } from "./Sidebar.style";
import { BiMessageAltDetail } from "react-icons/bi";
import IconToggler from "../../../assets/img/sidebar_icon.svg";
import { FaUsers } from "react-icons/fa";
import Heading from "../../../components/Heading/Heading";
import Text from "../../../components/Text/Text";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <Wrapper>
      <SidebarToggler isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <img src={IconToggler} alt="icon" />
      </SidebarToggler>
      {isOpen ? (
        <Heading color="white">Admin</Heading>
      ) : (
        <Heading color="white">A</Heading>
      )}
      <StyledLink to="/admin/candidates">
        <FaUsers />
        {isOpen && <Text size="sm">Orders</Text>}
      </StyledLink>
      <StyledLink to="/admin/contacts">
        <BiMessageAltDetail />
        {isOpen && <Text size="sm">Messages</Text>}
      </StyledLink>
    </Wrapper>
  );
};

export default Sidebar;
