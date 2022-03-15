import React from 'react'



function Article ({posts}) {

   console.log({posts})
    const listArticle = posts.map((post) => {
        return(    <article key= {post.id}>
            <h3 key={post}>{post.title}</h3>
            <small>{post.date || "January 1, 1970"}</small>
            <p>{post.preview}</p>
            </article>)
    })    
    return(
        <article>
            {listArticle}
        </article>
    )
}

export default Article