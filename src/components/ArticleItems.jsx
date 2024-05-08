import axios from 'axios';
import { useState, useEffect } from 'react';
import { Interweave } from 'interweave';
import { Card, Spinner } from 'flowbite-react';

function ArticleItem() {
    const [articles, setArticles] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get('https://frt-backend.local/wp-json/wp/v2/articles?_embed')
            .then(res => {
                setArticles(res.data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    }, []); // The empty array ensures this effect only runs once, similar to componentDidMount

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
                    <h2 className="text-2xl font-bold">{article.title.rendered}</h2>
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

export default ArticleItem;
