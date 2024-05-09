import { Interweave } from "interweave"; // this allows us to render HTML content from the the WordPress API

function ArticleItems({ isLoaded, articles }) {
  if (!isLoaded) {
    // Dont laugh at my spinner, This i just a template  :)
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  console.log("ArticleItems");
  console.log(articles);

  return (
    <div className="">
      {articles.map((article) => (
        <div
          key={article.id}
          className="mb-5 p-4 bg-white border border-gray-200 rounded-lg"
        >
          {/* Display featured image if it exists */}
          {article._embedded &&
            article._embedded["wp:featuredmedia"] &&
            article._embedded["wp:featuredmedia"][0].source_url && (
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-4 w-1/2 mx-auto">
                <img
                  src={article._embedded["wp:featuredmedia"][0].source_url}
                  alt={article.title.rendered || "Article Image"}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
          <h2 className="text-2xl font-bold mb-2">{article.title.rendered}</h2>
          <p className="text-sm text-gray-800 mb-1">
            <strong>Published on:</strong>{" "}
            {new Date(article.date).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-800 mb-3">
            <strong>Last Modified:</strong>{" "}
            {new Date(article.modified).toLocaleDateString()}
          </p>
          <Interweave
            content={article.excerpt.rendered}
            className="text-gray-700 mb-3"
          />
          <p className="text-sm text-gray-800">
            <strong>Author:</strong> {article.acf.article_author}
          </p>
          <p className="text-sm text-gray-800">
            <strong>URL:</strong>{" "}
            <a
              href={article.acf.article_url}
              className="text-blue-500 hover:text-blue-700"
            >
              Visit Article
            </a>
          </p>
          <p className="text-sm text-gray-800">
            <strong>Published Date:</strong> {article.acf.published_date}
          </p>
          <p className="text-sm text-gray-800">
            <strong>Publisher:</strong> {article.acf.publisher}
          </p>
          <p className="text-sm text-gray-800">
            <strong>Author:</strong> {article._embedded.author[0].name}
          </p>
          <p className="text-sm text-gray-800">
            <strong>Categories:</strong>{" "}
            {article._embedded["wp:term"][0]
              .map((category) => category.name)
              .join(", ")}
          </p>
          <p className="text-sm text-gray-800">
            <strong>Tags:</strong>{" "}
            {article._embedded["wp:term"][1].map((tag) => tag.name).join(", ")}
          </p>
          <div className="prose max-w-none">
            <Interweave content={article.content.rendered} />
          </div>
          <a
            href={article.acf.article_url}
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
