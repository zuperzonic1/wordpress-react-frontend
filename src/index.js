import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./index.css";
import Homapage from "./pages/homepage";
import ArticleItem from "./components/ArticleItem";
import Layout from "./components/Layout";  // Make sure to import the Layout component
import { Articles } from "./components/Articles";


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

