import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Homepage from "./pages/Homepage";
import Articles from "./pages/Articles";
import ArticleItems from "./components/ArticleItems";
import ArticleTemplatePage from "./pages/ArticleTemplatePage";
import Layout from "./components/Layout";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    //  Fetch articles from the WordPress REST API + renaming the properties
    axios
      .get(
        "https://backend.frt-information-hub.ca/wp/wp-json/wp/v2/articles?_embed"
      )
      .then((res) => {
        const simplifiedArticles = res.data.map((article) => ({
          id: article.id,
          imageUrl:
            article._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          title: article.title.rendered,
          date: new Date(article.date).toLocaleDateString(),
          modified: new Date(article.modified).toLocaleDateString(),
          excerpt: article.excerpt.rendered,
          author: article._embedded?.author?.[0]?.name || "Unknown",
          articleUrl: article.acf.article_url,
          publishedDate: article.acf.published_date,
          publisher: article.acf.publisher,
          categories:
            article._embedded["wp:term"]?.[0]
              ?.map((cat) => cat.name)
              .join(", ") || "",
          tags:
            article._embedded["wp:term"]?.[1]
              ?.map((tag) => tag.name)
              .join(", ") || "",
          content: article.content.rendered,
        }));
        setArticles(simplifiedArticles);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(articles);

  // Passing the data to the ArticleItems component
  // <ArticleItems isLoaded={isLoaded} articles={articles} />;

  // Router configuration
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Homepage /> },
        {
          path: "articles",
          element: <Articles isLoaded={isLoaded} articles={articles} />,
          children: [
            {
              path: ":articleId",
              element: <ArticleTemplatePage articles={articles} />,
            },
            {
              path: "",
              element: <ArticleItems isLoaded={isLoaded} articles={articles} />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
