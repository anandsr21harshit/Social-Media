import React, { useState } from 'react'
import NewPostCSS from "./NewPost.module.css"
import man from "../../assets/man.png"
import { useDispatch } from 'react-redux';
import { addUserPost } from '../../features/post/postSlice';

function NewPost() {
  const [postData, setPostData] = useState("");
  const dispatch = useDispatch();

  const postHandler = ()=>{
    dispatch(addUserPost(postData));
    setPostData("")
  }

  return (
    <div className={`d-flex ${NewPostCSS.container}`}>
      <div className={`d-flex ${NewPostCSS.header}`}>
        <img src={man} alt="User Icon" />
        <textarea placeholder="What's in your mind.." value={postData} onChange={(e)=> setPostData(e.target.value)}></textarea>
      </div>
      <button className='btn btn-primary' onClick={postHandler}>Post</button>
    </div>
  )
}

export {NewPost}