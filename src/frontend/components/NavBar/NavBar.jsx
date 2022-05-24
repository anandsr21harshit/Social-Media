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

function NavBar() {
  const dispatch = useDispatch();

  return (
    <nav className={`d-flex ${NavCSS.container}`}>
      <img src={home} alt="home" />
      <img src={bookmark} alt="bookmark" />
      <img src={explore} alt="explore" />
      <img src={user} alt="user" />
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
