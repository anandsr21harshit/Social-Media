import React from 'react'
import CommentCSS from "./Comment.module.css"
import { User } from '../User/User'

function Comment() {
  return (
    <div className={CommentCSS.container}>
         <User/>
        <div className={CommentCSS.comment}>
        </div>
    </div>
  )
}

export {Comment}