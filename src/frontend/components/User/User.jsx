import React from "react";
import UserCSS from "./User.module.css"
import man from "../../assets/man.png"


function User() {
  return (
    <div className={`d-flex ${UserCSS.container}`}>
      <img src={man} alt="Iser Icon" />
      <p>User Name</p>
    </div>
  );
}

export { User };
