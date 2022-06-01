import React, { useState } from "react";
import { useDispatch } from "react-redux";
import man from "../../assets/man.png";
import arrow from "../../assets/right-arrow.png";
import { addComment } from "../../features/post/postSlice";
import NewCommentCSS from "./NewComment.module.css";

function NewComment({post}) {

  const [commentData, setCommentData] = useState({ text: "" });
  const dispatch = useDispatch();
  const postId = post._id;

  const commentHandler = ()=> {
    dispatch(addComment({commentData,postId}))
    setCommentData({text:""});
  }

  return (
    <div className={`d-flex ${NewCommentCSS.container}`}>
      <img src={man} alt="User Icon" />
      <div className={NewCommentCSS.comment_input}>
        <textarea
          placeholder="Write your comment"
          className={NewCommentCSS.input_area}
          value={commentData.text}
          onChange={(e) =>
            setCommentData({ ...commentData, text: e.target.value })
          }
        />
        {commentData.text.length >0 && <img src={arrow} alt="Arrow" onClick={commentHandler} />}
      </div>
    </div>
  );
}

export { NewComment };
