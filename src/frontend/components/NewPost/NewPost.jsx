import React from 'react'
import NewPostCSS from "./NewPost.module.css"

function NewPost() {
  return (
    <div className={`d-flex ${NewPostCSS.container}`}>
      <div className={`d-flex ${NewPostCSS.input_wrapper}`}>
        <i className="bi bi-person-circle"></i>
        <article>What's in your mind?</article>
      </div>
    </div>
  )
}

export {NewPost}