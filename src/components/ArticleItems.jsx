import { Link } from "react-router-dom"; // Import Link from react-router-dom

function ArticleItems({ isLoaded, articles }) {
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
          className="mb-5 p-4 bg-white border border-gray-200 rounded-lg"
        >
          {article.imageUrl && (
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-4 w-1/2 mx-auto">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
          <p className="text-sm text-gray-800 mb-1">
            <strong>Published on:</strong> {article.date}
          </p>
          <p className="text-sm text-gray-800 mb-3">
            <strong>Last Modified:</strong> {article.modified}
          </p>
          <Link
            to={`/articles/${article.id}`}
            className="text-blue-500 hover:text-blue-700"
          >
            Read full article
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ArticleItems;
