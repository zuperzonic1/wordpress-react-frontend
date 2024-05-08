import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Footer } from "flowbite-react";

const Layout = () => {
  return (
    <div>
        <Navigation />
            <Outlet />  {/* Nested routes will render here */}
            <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src="../favicon.ico"
            alt="Flowbite Logo"
            name="Flowbite"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      </div>
    </Footer>
    </div>
  );
};

export default Layout;
