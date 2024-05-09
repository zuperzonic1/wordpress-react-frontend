import ArticleItems from "../components/ArticleItems";

function Articles({ isLoaded, articles }) {

    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Articles</h1>
            {/* add filters etc */}
            <ArticleItems isLoaded={isLoaded} articles={articles}  />
            </div>
);
}

export default Articles;