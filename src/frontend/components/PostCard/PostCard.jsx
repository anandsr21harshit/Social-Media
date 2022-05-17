import React from 'react'
import { Button } from '../Buttons/Button'
import { NewComment } from '../NewComment/NewComment'
import { User } from '../User/User'
import { Comment } from '../Comment/Comment'
import PostCardCSS from "./PostCard.module.css"

function PostCard() {
  return (
    <div className={` d-flex ${PostCardCSS.container}`}>
        <header className={`d-flex ${PostCardCSS.header}`}>
            <User/>
            <i className="bi bi-three-dots-vertical"></i>
        </header>
        <article>I am post content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos dicta consectetur, exercitationem deleniti ut quasi voluptates quibusdam facere iure quidem quas enim vero amet fugit dolore distinctio minus sunt?
        </article>
        <Button/>
        <NewComment/>
        <Comment/>
    </div>
  )
}

export {PostCard}