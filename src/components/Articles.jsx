import { Component } from 'react';
import axios from 'axios'; // Axios is a library that helps make HTTP requests
import { Interweave } from 'interweave';  // this is a library that helps render HTML content in React

export class Articles extends Component {
   state = {
       articles: [],
       isLoaded: false
   };

   componentDidMount() {
       axios.get('https://frt-backend.local/wp-json/wp/v2/articles?_embed')
           .then(res => this.setState({
               articles: res.data,
               isLoaded: true
           }))
           .catch(err => console.log(err));
   }

   render() {
       const { isLoaded, articles } = this.state;
       return (
           <div>
               <h1>Articles</h1>
               {isLoaded ? articles.map(article => (
                   <div key={article.id}>
                       <h2>{article.title.rendered}</h2>
                       <Interweave content={article.excerpt.rendered} />
                       <p>Publisher: {article.acf.publisher}</p> //acf is a custom field plugin that we use inside wordpress
                       <p>Author: {
                           article._embedded.author && article._embedded.author[0].name
                       }</p>
                       <p>Categories: {
                           article._embedded['wp:term'] && article._embedded['wp:term'][0]
                           ? article._embedded['wp:term'][0].map(category => category.name).join(', ')
                           : 'No categories'
                       }</p>
                       <div className=''>
                           <Interweave content={article.content.rendered} />
                       </div>
                   </div>
               )) : <p>Loading...</p>}
           </div>
       );
   }
}
