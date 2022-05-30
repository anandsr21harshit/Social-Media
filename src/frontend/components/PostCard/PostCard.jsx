import React, {useState} from "react";
import { Button } from "../Buttons/Button";
import { NewComment } from "../NewComment/NewComment";
import { User } from "../User/User";
import { Comment } from "../Comment/Comment";
import PostCardCSS from "./PostCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../features/post/postModalSlice";
import { deleteUserPost } from "../../features/post/postSlice";

function PostCard({post}) {

  const { content, username, _id } = post;
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState(false);
  const {allUsers} = useSelector( state => state.users);
  const loggedInUser = JSON.parse(localStorage.getItem("loginCred")).user;
  const currentUser = allUsers.find(user => user.username === username);

  const editHandler = () => {
    dispatch(openModal(post));
    setEditModal(false);
  }

  const deleteHandler = (id) => {
    dispatch(deleteUserPost(id));
    setEditModal(false);
  }
  
  return (
    <div className={` d-flex ${PostCardCSS.container}`}>
      <header className={`d-flex ${PostCardCSS.header}`}>
        <User username={username} firstName={currentUser?.firstName} lastName={currentUser?.lastName} image={currentUser?.profilePic} />
        {username === loggedInUser.username && <i className="bi bi-three-dots-vertical" onClick={()=> setEditModal(!editModal)}></i>}
      </header>
      {editModal && (
          <ul className={PostCardCSS.edit_modal}>
            <li onClick={() => editHandler(_id)}><i className="bi bi-pencil-square"></i>Edit</li>
            <li onClick={()=>deleteHandler(_id)}><i className="bi bi-trash-fill"></i>Delete</li>
          </ul>
        )}
      <article>{content}</article>
      <Button post={post} id={_id}/>
      <NewComment />
      {/* <Comment /> */}
    </div>
  );
}

export { PostCard };
