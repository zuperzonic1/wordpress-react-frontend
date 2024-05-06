import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div>
        <Navigation />
            <Outlet />  {/* Nested routes will render here */}
        <h1 className="bg-black">Footer comp goes here</h1>
    </div>
  );
};

export default Layout;
