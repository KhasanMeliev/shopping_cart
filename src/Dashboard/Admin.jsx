import React from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./Admin.style";
import Sidebar from "./containers/Sidebar/Sidebar";

const Admin = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
};

export default Admin;
