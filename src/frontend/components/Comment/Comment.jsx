import React, { useState } from "react";
import CommentCSS from "./Comment.module.css";
import { User } from "../User/User";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, editComment } from "../../features/post/postSlice";

function Comment({ post, commentUser }) {
  const [editModal, setEditModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { allUsers } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);
  const [inputComment, setInputComment] = useState(commentUser.text);
  const userWhoCommented = allUsers.filter(
    (user) => user.username === commentUser.username
  )[0];

  const username = userWhoCommented?.username;
  const firstName = userWhoCommented?.firstName;
  const lastName = userWhoCommented?.lastName;
  const profilePic = userWhoCommented?.profilePic;
  const id = userWhoCommented?._id;
  const dispatch = useDispatch();

  const editHandler = () => {
    setIsEdit(true);
    setEditModal(!editModal);
  };

  const deleteHandler = (postId, commentId) => {
    setEditModal(!editModal);
    dispatch(deleteComment({ postId, commentId }));
  };

  const formHandler = (postId,commentId) => {
    dispatch(editComment({postId,commentId,commentData:inputComment}))
    setIsEdit(false);
  }

  return (
    <div className={CommentCSS.container}>
      <div className={`d-flex ${CommentCSS.header}`}>
        <User
          username={username}
          firstName={firstName}
          lastName={lastName}
          image={profilePic}
          flag={true}
          id={id}
        />
        {user.username === username && (
          <i
            className="bi bi-three-dots-vertical"
            onClick={() => setEditModal(!editModal)}
          ></i>
        )}
      </div>
      {editModal && (
        <ul className={CommentCSS.edit_modal}>
          <li onClick={() => editHandler()}>
            <i className="bi bi-pencil-square"></i>Edit
          </li>
          <li onClick={() => deleteHandler(post._id, commentUser._id)}>
            <i className="bi bi-trash-fill"></i>Delete
          </li>
        </ul>
      )}
      {isEdit ? (
        <form
          className={`d-flex ${CommentCSS.edit_form}`}
          onSubmit={(e) => {
            e.preventDefault();
            formHandler(post._id,commentUser._id);
          }}
        >
          <textarea
            type="text"
            className={CommentCSS.comment_input}
            value={inputComment}
            onChange={(e) => setInputComment(e.target.value)}
          />
          <div>
            <button className="btn btn-primary" type="submit">
              Ok
            </button>
            <button
              className="btn btn btn-outline btn-primary-outline"
              onClick={() => {
                setIsEdit(false)
                setInputComment(commentUser.text)
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className={CommentCSS.comment}>{commentUser.text}</div>
      )}
    </div>
  );
}

export { Comment };
