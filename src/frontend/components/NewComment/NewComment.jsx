import React from 'react'
import man from "../../assets/man.png"
import arrow from "../../assets/right-arrow.png"
import NewCommentCSS from "./NewComment.module.css"

function NewComment() {
  return (
    <div className={`d-flex ${NewCommentCSS.container}`}>
        <img src={man} alt="User Icon" />
        <div className={NewCommentCSS.comment_input}>
            <div data-placeholder='Write your comment' contentEditable="true" className={NewCommentCSS.input_area} />
            <img src={arrow} alt="Arrow" />
        </div>
    </div>
  )
}

export {NewComment}