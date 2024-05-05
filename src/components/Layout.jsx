import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1 className="bg-black">NAV comp goes here</h1>
      <Outlet />  {/* Nested routes will render here */}
      <h1 className="bg-black">Footer comp goes here</h1>
    </div>
  );
};

export default Layout;
