import React from "react";
import UserCSS from "./User.module.css"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function User({username, firstName, lastName, image, flag}) {

  const { user} = useSelector(state => state.auth);

  const navigate= useNavigate();

  const profileHandler = () => {
    user.username === username ? navigate("/profile"): navigate(`/user-profile/${username}`)
  }
 
  return (
    <div className={`d-flex ${UserCSS.container}`}>
      <img src={image} alt="User Icon" />
      <div onClick={profileHandler}>
      <h4>{firstName} {lastName}</h4>
      {!flag && <p className={UserCSS.username}>@{username}</p>}
      </div>
    </div>
  );
}

export { User };
