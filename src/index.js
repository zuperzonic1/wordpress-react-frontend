import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import Homapage from "./pages/Homepage";
import Articles from "./pages/Articles";

import Layout from "./components/Layout";  // Make sure to import the Layout component


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "",
       element: <Homapage /> },  // Default route when visiting '/'
      {
        path: "articles",
        element: <Articles />,
      }
    ],
  },
  // You can add more routes here if needed
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

