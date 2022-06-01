import React from "react";
import NavCSS from "./NavBar.module.css";
import logout from "../../assets/logout.png";
import home from "../../assets/home.png";
import explore from "../../assets/explore.png";
import user from "../../assets/user.png";
import bookmark from "../../assets/bookmark.png";
import { useDispatch } from "react-redux";
import { logoutHandler } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();

  return (
    <nav className={`d-flex ${NavCSS.container}`}>
      <Link to={"/"}><img src={home} alt="home" /></Link>
      <Link to={"/bookmark"}><img src={bookmark} alt="bookmark" /></Link>
      <Link to={"/explore"}><img src={explore} alt="explore" /></Link>
      <Link to={"/profile"}><img src={user} alt="user" /></Link>
      <img
        src={logout}
        alt="logout"
        onClick={() => {
          dispatch(logoutHandler());
          toast.success("Logged out successfully");
        }}
      />
    </nav>
  );
}

export { NavBar };
