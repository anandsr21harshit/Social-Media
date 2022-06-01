import React from 'react'
import CommentCSS from "./Comment.module.css"
import { User } from '../User/User'
import { useSelector } from 'react-redux'

function Comment({commentUser}) {
  const {allUsers} = useSelector(state => state.users);
  const userWhoCommented = allUsers.filter(user => user.username === commentUser.username)[0];

  const {username,firstName, lastName, profilePic} = userWhoCommented;
  
  return (
    <div className={CommentCSS.container}>
         <User username={username} firstName={firstName} lastName={lastName} image={profilePic} flag={true}/>
        <div className={CommentCSS.comment}>
          {commentUser.text}
        </div>
    </div>
  )
}

export {Comment}