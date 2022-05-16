import React from 'react'
import NavCSS from "./NavBar.module.css"
import logout from "../../assets/logout.png"
import home from "../../assets/home.png"
import explore from "../../assets/explore.png"
import user from "../../assets/user.png"
import bookmark from "../../assets/bookmark.png"

function NavBar() {
  return (
    <nav className={`d-flex ${NavCSS.container}`}>
      <img src={home} alt="" />
      <img src={bookmark} alt="" />
      <img src={explore} alt="" />
      <img src={user} alt="" />
      <img src={logout} alt="" />
    </nav>
  )
}

export {NavBar}