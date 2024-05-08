import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
        <Navigation />
            <Outlet />  {/* Nested routes will render here */}
        <Footer />
    </div>
  );
};

export default Layout;
