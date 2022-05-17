import React from "react";
import HeaderCSS from "./Header.module.css";
import logo from "../../assets/instagram.png";
import logout from "../../assets/logout.png"
import home from "../../assets/home.png"
import explore from "../../assets/explore.png"
import user from "../../assets/user.png"
import bookmark from "../../assets/bookmark.png"

function Header() {
  return (
    <>
      <nav className={`nav-bar ${HeaderCSS.nav_container}`}>
        <img src={logo} alt="Brand Icon" />
        <h1 className={`nav-brand ${HeaderCSS.nav_brand}`}>Dev Junction</h1>

        {/* for desktop view */}
        <ul className={HeaderCSS.desktop_menu}>
          <li><img src={home} alt="" /></li>
          <li> <img src={bookmark} alt="" /></li>
          <li><img src={explore} alt="" /></li>
          <li><img src={user} alt="" /></li>
          <li><img src={logout} alt="" /></li>
        </ul>
      </nav>
    </>
  );
}

export { Header };
