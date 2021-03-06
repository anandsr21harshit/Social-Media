import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import man from "../../assets/man.png";
import arrow from "../../assets/right-arrow.png";
import { addComment } from "../../features/post/postSlice";
import NewCommentCSS from "./NewComment.module.css";

function NewComment({post}) {

  const [commentData, setCommentData] = useState("");
  const dispatch = useDispatch();
  const postId = post._id;

  const commentHandler = ()=> {
    dispatch(addComment({commentData,postId}))
    setCommentData("");
  }

  const {user} = useSelector(state => state.auth);

  return (
    <div className={`d-flex ${NewCommentCSS.container}`}>
      <img src={user.profilePic} alt="User Icon" />
      <div className={NewCommentCSS.comment_input}>
        <textarea
          placeholder="Write your comment"
          className={NewCommentCSS.input_area}
          value={commentData}
          onChange={(e) =>
            setCommentData(e.target.value)
          }
        />
        {commentData.length >0 && <img src={arrow} alt="Arrow" onClick={commentHandler} />}
      </div>
    </div>
  );
}

export { NewComment };
