import React from "react";
import { Button } from "../Buttons/Button";
import { NewComment } from "../NewComment/NewComment";
import { User } from "../User/User";
import { Comment } from "../Comment/Comment";
import PostCardCSS from "./PostCard.module.css";
import { useSelector } from "react-redux";

function PostCard({ content, username, _id }) {

  const {allUsers} = useSelector( state => state.users);
  const currentUser = allUsers.find(user => user.username === username);
  
  return (
    <div className={` d-flex ${PostCardCSS.container}`}>
      <header className={`d-flex ${PostCardCSS.header}`}>
        <User username={username} firstName={currentUser?.firstName} lastName={currentUser?.lastName} image={currentUser?.profilePic} />
        <i className="bi bi-three-dots-vertical"></i>
      </header>
      <article>{content}</article>
      <Button />
      <NewComment />
      {/* <Comment /> */}
    </div>
  );
}

export { PostCard };
