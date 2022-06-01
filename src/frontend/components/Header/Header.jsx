import React, { useEffect } from "react";
import HeaderCSS from "./Header.module.css";
import logo from "../../assets/instagram.png";
import logout from "../../assets/logout.png"
import home from "../../assets/home.png"
import explore from "../../assets/explore.png"
import user from "../../assets/user.png"
import bookmark from "../../assets/bookmark.png"
// import { useSelector } from "react-redux";
import {logoutHandler } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useSelector(state => state.auth);

  useEffect(()=>{
    if(!token){
      navigate("/login");
    }
  },[token])
  return (
    <>
      <nav className={`nav-bar ${HeaderCSS.nav_container}`}>
        <img src={logo} alt="Brand Icon" />
        <h1 className={`nav-brand ${HeaderCSS.nav_brand}`}>Dev Junction</h1>

        {/* for desktop view */}
        {token && <ul className={HeaderCSS.desktop_menu}>
          <li><Link to={"/"}><img src={home} alt="Home" /></Link></li>
          <li><Link to={"/bookmark"}><img src={bookmark} alt="Bookmark" /></Link></li>
          <li><Link to={"/explore"}><img src={explore} alt="Explore" /></Link></li>
          <li><Link to={"/profile"}><img src={user} alt="Profile" /></Link></li>
          <li onClick={()=>{
            dispatch(logoutHandler())
            toast.success("Successfully Logged Out");
            }}><img src={logout} alt="Logout" /></li>
        </ul>}
      </nav>
    </>
  );
}

export { Header };
