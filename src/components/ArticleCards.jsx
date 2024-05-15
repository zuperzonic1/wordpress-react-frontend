import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Interweave } from "interweave";

function ArticleCards({ isLoaded, articles }) {
  if (!isLoaded) {
    return (
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
  }

  return (
    <div>
      {articles.map((article) => (
        <div
          key={article.id}
          className="mb-5 p-4 bg-white border border-gray-200 rounded-lg flex"
        >
          {article.imageUrl && (
            <div className="flex-none w-48 mr-4">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          )}
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
            <p className="text-sm text-gray-800 mb-1">
              <strong>Published on:</strong> {article.publishedDate}
            </p>
            <Interweave content={article.excerpt} className="mb-4" />
            <Link
              to={`/articles/${article.id}`}
              className="text-blue-500 hover:text-blue-700"
            >
              Read full article
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticleCards;
