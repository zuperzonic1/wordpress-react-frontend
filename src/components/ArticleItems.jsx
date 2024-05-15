import { Interweave } from "interweave"; // this allows us to render HTML content from the the WordPress API

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
          <Interweave
            content={article.excerpt}
            className="text-gray-700 mb-3"
          />
          <p className="text-sm text-gray-800">
            <strong>Author:</strong> {article.author}
          </p>
          <p className="text-sm text-gray-800">
            <strong>URL:</strong>{" "}
            <a
              href={article.articleUrl}
              className="text-blue-500 hover:text-blue-700"
            >
              Visit Article
            </a>
          </p>
          <p className="text-sm text-gray-800">
            <strong>Published Date:</strong> {article.publishedDate}
          </p>
          <p className="text-sm text-gray-800">
            <strong>Publisher:</strong> {article.publisher}
          </p>
          <p className="text-sm text-gray-800">
            <strong>Categories:</strong> {article.categories}
          </p>
          <p className="text-sm text-gray-800">
            <strong>Tags:</strong> {article.tags}
          </p>
          <div className="prose max-w-none">
            <Interweave content={article.content} />
          </div>
          <a
            href={article.articleUrl}
            className="mt-4 inline-block text-blue-500 hover:text-blue-700"
          >
            Read full article
          </a>
        </div>
      ))}
    </div>
  );
}

export default ArticleItems;
