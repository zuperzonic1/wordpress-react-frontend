import ArticleItems from "../components/ArticleItems";

function Articles({ isLoaded, articles }) {

    return (
        <main className="p-4 mx-auto max-w-7xl">
        <div className="bg-white shadow mb-4 py-4 px-8">
            <h1 className="text-3xl font-bold">Articles</h1>
        </div>            {/* add filters etc */}
            <ArticleItems isLoaded={isLoaded} articles={articles}  />
        </main>
);
}

export default Articles;