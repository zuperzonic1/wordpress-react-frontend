import * as React from "react";
import { useState, useEffect } from 'react';
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from 'axios';
import "./index.css";
import Homepage from "./pages/Homepage"; // Corrected spelling from 'Homapage' to 'Homepage'
import Articles from "./pages/Articles";
import Layout from "./components/Layout";  // Make sure to import the Layout component

function App() {
    const [articles, setArticles] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get('https://frt-backend.local/wp-json/wp/v2/articles?_embed')
            .then(res => {
                setArticles(res.data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    }, []); // The empty array ensures this effect only runs once, similar to componentDidMount

    // Define the router inside the App component
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "", element: <Homepage /> },  // Default route when visiting '/'
                {
                    path: "articles",
                    element: <Articles isLoaded={isLoaded} articles={articles} />,
                }
            ],
        },
        // Additional routes can be added here
    ]);

    // Return the RouterProvider with the router configuration
    return (
        <RouterProvider router={router} />
    );
}

// Create a root container and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
