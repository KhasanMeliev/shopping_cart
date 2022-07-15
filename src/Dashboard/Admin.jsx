import React from "react";
import { Wrapper } from "./Admin.style";
import Sidebar from "./containers/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
};

export default Admin;
