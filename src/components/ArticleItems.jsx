
import { Interweave } from 'interweave';
import { Card, Spinner } from 'flowbite-react';

function ArticleItems({ isLoaded, articles }) {
    if (!isLoaded) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner aria-label="Default status example" />
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 p-4">
            {articles.map(article => (
                <Card key={article.id} className="mb-5">
                    {/* Display featured image if it exists */}
                    {article._embedded && article._embedded['wp:featuredmedia'] && article._embedded['wp:featuredmedia'][0].source_url && (
                        <img src={article._embedded['wp:featuredmedia'][0].source_url} alt={article.title.rendered} className="mb-4" />
                    )}
                    <h2 className="text-2xl font-bold">{article.title.rendered}</h2>
                    <p className="font-medium">Published on: {new Date(article.date).toLocaleDateString()}</p>
                    <p className="font-medium">Last Modified: {new Date(article.modified).toLocaleDateString()}</p>
                    <Interweave content={article.excerpt.rendered} />
                    <p className="font-medium">Publisher: {article.acf.publisher}</p>
                    <p className="font-medium">Author: {
                        article._embedded.author && article._embedded.author[0].name
                    }</p>
                    <p className="font-medium">Categories: {
                        article._embedded['wp:term'] && article._embedded['wp:term'][0]
                        ? article._embedded['wp:term'][0].map(category => category.name).join(', ')
                        : 'No categories'
                    }</p>
                    <div>
                        <Interweave content={article.content.rendered} />
                    </div>
                </Card>
            ))}
        </div>
    );
}
export default ArticleItems;
