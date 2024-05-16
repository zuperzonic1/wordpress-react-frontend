import { useParams } from "react-router-dom";
import { Interweave } from "interweave";

function ArticleDetailsPage({ articles }) {
  const { articleId } = useParams();
  const article = articles.find((a) => `${a.id}` === articleId);

  console.log("articleId", articleId);
  console.log("articles", articles);
  console.log("article", article);

  if (!article) {
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
    <div className="mb-5 p-4 bg-white border border-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full max-w-4xl h-auto mb-4 rounded"
        />
      )}
      <div className="text-sm text-gray-800 mb-2">
        <strong>Wordpress Published on:</strong> {article.date}
      </div>
      <div className="text-sm text-gray-800 mb-2">
        <strong>Wordpress Last Modified:</strong> {article.modified}
      </div>
      <div className="text-sm text-gray-800 mb-2">
        <strong>Article Published Date:</strong> {article.publishedDate}
      </div>
      <div className="text-sm text-gray-800 mb-2">
        <strong>Publisher:</strong> {article.publisher}
      </div>
      <div className="text-sm text-gray-800 mb-2">
        <strong>Categories:</strong> {article.categories}
      </div>
      <div className="text-sm text-gray-800 mb-4">
        <strong>Tags:</strong> {article.tags}
      </div>
      <Interweave content={article.content} className="prose max-w-none mb-4" />

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        <a href={article.articleUrl} target="_blank" rel="noopener noreferrer">
          Read Full Article
        </a>
      </button>
    </div>
  );
}

export default ArticleDetailsPage;
