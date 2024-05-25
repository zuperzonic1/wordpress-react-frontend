import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navigation /> {/* Navigation component */}
      <div className="min-h-75vh">
        <Outlet /> {/* Nested routes inside your index.jsx will render here */}
      </div>
      <Footer /> {/* Footer component */}
    </div>
  );
};

export default Layout;
