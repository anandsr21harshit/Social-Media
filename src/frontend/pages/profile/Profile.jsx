import React from 'react'
import { PostCard } from '../../components/PostCard/PostCard'
import { ProfileCard } from '../../components/ProfileCard/ProfileCard'
import ProfileCSS from "./Profile.module.css"

function Profile() {
  return (
    <div className={`d-flex ${ProfileCSS.container}`}>
        <ProfileCard/>
        {/* <PostCard/>
        <PostCard/> */}
    </div>
  )
}

export {Profile}