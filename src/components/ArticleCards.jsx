import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Interweave } from "interweave";

// This is a component that will render the articles in a card format.
// Edit them both as needed.
function ArticleCards({ articles }) {
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
