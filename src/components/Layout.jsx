import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navigation /> {/* Navigation component */}
      <Outlet /> {/* Nested routes inside your index.jsx will render here */}
      <Footer /> {/* Footer component */}
    </div>
  );
};

export default Layout;
