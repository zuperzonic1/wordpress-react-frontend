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
               isLoaded: true // Set isLoaded to false to develop the loading page. 
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
                       {/* ACF is the Custom field plugin being used in Wordpress */}
                       <p>Publisher: {article.acf.publisher}</p> 
                       <p>Author: {
                           article._embedded.author && article._embedded.author[0].name
                       }</p>
                       <p>Categories: {
                           article._embedded['wp:term'] && article._embedded['wp:term'][0]
                           ? article._embedded['wp:term'][0].map(category => category.name).join(', ')
                           : 'No categories'
                       }</p>
                       <div className='bg-black'>
                        {/* We are using Interweave here to convert an HTML image to a react friendly image, as the content contains the para text + and images they added to the site. */}
                           <Interweave content={article.content.rendered} />
                       </div>
                   </div>
               )) : <div><p>Create a Loading Page comp and add it here ...</p>
                     <p>loading ...</p>
               </div>
               }
           </div>
       );
   }
}
