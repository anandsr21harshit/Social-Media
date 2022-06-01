import React from "react";
import UserCSS from "./User.module.css"
import man from "../../assets/man.png"
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


function User({username, firstName, lastName, image, flag}) {
 
  return (
    <div className={`d-flex ${UserCSS.container}`}>
      <img src={image} alt="User Icon" />
      <div>
      <h4>{firstName} {lastName}</h4>
      {!flag && <p className={UserCSS.username}>@{username}</p>}
      </div>
    </div>
  );
}

export { User };
