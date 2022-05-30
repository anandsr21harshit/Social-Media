import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../features/post/postModalSlice";
import { editUserPost } from "../../../features/post/postSlice";
import "./Modal.css";

function Modal() {
    const dispatch = useDispatch();
    const [postInput, setPostInput] = useState("");
    const {isModalOpen, postData} = useSelector(state => state.postModal);

    useEffect(()=>{
        setPostInput(postData.content);
    },[postData]);

    const postHandler = () => {
        dispatch(editUserPost({...postData, content:postInput}))
        dispatch(closeModal())
    }

  return (
    <div className={isModalOpen ? `modal-container modal-container-custom` : `modal-container`}>
      <div className="modal-content">
          <div className="modal-header">
            <header>Edit Post</header>
            <i onClick={()=>dispatch(closeModal())} className="bi bi-x-circle-fill"></i>
          </div>
          <hr />
        <textarea className="edit-text" value={postInput} onChange={(e)=> setPostInput(e.target.value)}></textarea>
        <button className="btn btn-primary" onClick={postHandler}>Post</button>
      </div>
    </div>
  );
}

export default Modal;
