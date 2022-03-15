import React from 'react'
import Article from './Article'

function ArticleList ({posts}) {
        console.log(posts)
    return(
        <main key={posts.id}>
            <Article posts = {posts}/>
        </main>
    )
}



export default ArticleList;