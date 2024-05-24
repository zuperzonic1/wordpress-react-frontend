import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Layout from "./components/Layout";

const Homepage = React.lazy(() => import("./pages/Homepage"));
const FAQPage = React.lazy(() => import("./pages/FAQPage"));
const MapPage = React.lazy(() => import("./pages/MapPage"));
const Articles = React.lazy(() => import("./pages/Articles"));
const ArticleCards = React.lazy(() => import("./components/ArticleCards"));
const ArticleDetailsPage = React.lazy(() =>
  import("./pages/ArticleDetailsPage")
);

function App() {
  const [articles, setArticles] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

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
        setIsDataLoaded(true); // Ensure loading state is disabled in case of error
      })
      .catch((err) => console.log(err));
  }, []);

  // This is your main data structure, you will be using this to render the articvles, as well as we will be using to create the filters & categories for the articles.
  console.log(articles);

  // Loading indicator - Feel free to customize this as needed to fit the theme.

  const loadingIndicator = (
    <div className="flex justify-center items-center h-screen">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );

  // Router configuration
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: (
            <React.Suspense fallback={loadingIndicator}>
              <Homepage />
            </React.Suspense>
          ),
        },
        {
          path: "faq",
          element: (
            <React.Suspense fallback={loadingIndicator}>
              <FAQPage />
            </React.Suspense>
          ),
        },
        {
          path: "info-map",
          element: (
            <React.Suspense fallback={loadingIndicator}>
              <MapPage />
            </React.Suspense>
          ),
        },
        {
          path: "articles",
          element: isDataLoaded ? (
            <React.Suspense fallback={loadingIndicator}>
              <Articles articles={articles} />
            </React.Suspense>
          ) : (
            loadingIndicator
          ),
          children: [
            {
              path: ":articleId",
              element: isDataLoaded ? (
                <React.Suspense fallback={loadingIndicator}>
                  <ArticleDetailsPage articles={articles} />
                </React.Suspense>
              ) : (
                loadingIndicator
              ),
            },
            {
              path: "",
              element: isDataLoaded ? (
                <React.Suspense fallback={loadingIndicator}>
                  <ArticleCards articles={articles} />
                </React.Suspense>
              ) : (
                loadingIndicator
              ),
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
