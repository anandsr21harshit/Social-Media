import React from 'react'
import { User } from '../User/User'
import ProfileCardCSS from "./ProfileCard.module.css"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import twitter from "../../assets/twitter.png"
import { useSelector } from 'react-redux'

function ProfileCard() {
    const {user} = useSelector(state => state.auth);
    const {username, firstName, lastName} = user;

    const {allUsers} = useSelector(state => state.users);
    const currentUser = allUsers.find(user => user.username === username);

  return (
    <div className={ProfileCardCSS.container}>
        <div className={`d-flex ${ProfileCardCSS.header}`}>
            <User username={username} firstName={firstName} lastName={lastName} image={currentUser.profilePic}/>
            <span>Edit</span>
        </div>
        <article className={ProfileCardCSS.description}>
            Aspiring Front-End Developer
        </article>
        <ul className={`d-flex ${ProfileCardCSS.stats}`}>
            <li>3 Posts</li>
            <li>5 Followers</li>
            <li>2 Following</li>
        </ul>
        <a href="https://www.linkedin.com/in/hanand2021" target="_blank" className={ProfileCardCSS.social_media}>
            <img src={linkedin} alt="linkedin icon" />
            <img src={github} alt="github icon" />
            <img src={twitter} alt="twitter icon" />
        </a>
    </div>
  )
}

export {ProfileCard}