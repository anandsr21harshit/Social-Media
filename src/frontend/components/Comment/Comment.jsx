import React from 'react'
import CommentCSS from "./Comment.module.css"
import { User } from '../User/User'

function Comment() {
  return (
    <div className={CommentCSS.container}>
         <User/>
        <div className={CommentCSS.comment}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem numquam ullam itaque voluptatem optio iure aliquid incidunt doloremque dolor neque ut hic, temporibus nostrum cumque soluta quia, deleniti autem.
        </div>
    </div>
  )
}

export {Comment}