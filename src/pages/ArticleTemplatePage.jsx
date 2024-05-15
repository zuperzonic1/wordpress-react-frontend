import { useParams } from "react-router-dom";
import { Interweave } from "interweave";

function ArticleTemplatePage({ articles }) {
  const { articleId } = useParams();
  const article = articles.find((a) => `${a.id}` === articleId);

  console.log("articleId", articleId);
  console.log("articles", articles);
  console.log("article", article);
  if (!article) {
    return <p>Article not found!</p>;
  }

  return (
    <div className="mb-5 p-4 bg-white border border-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
      <Interweave content={article.content} className="prose max-w-none" />
      {/* Additional article details can be rendered here */}
    </div>
  );
}

export default ArticleTemplatePage;
