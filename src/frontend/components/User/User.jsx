import React from "react";
import UserCSS from "./User.module.css"
import man from "../../assets/man.png"
import { useSelector } from "react-redux";


function User() {
  const {user} = useSelector(state => state.auth);

  return (
    <div className={`d-flex ${UserCSS.container}`}>
      <img src={man} alt="Iser Icon" />
      <h4>{user?.firstName} {user?.lastName}</h4>
      <span className="username">@{user?.username}</span>
    </div>
  );
}

export { User };
