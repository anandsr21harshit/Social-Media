import React from 'react'
import { NewPost } from '../../components/NewPost/NewPost'
import { PostCard } from '../../components/PostCard/PostCard'
import HomeCSS from  "./Home.module.css"

function Home() {
  return (
    <section className={`d-flex ${HomeCSS.container}`}>
        <NewPost/>
        <PostCard/>
    </section>
  )
}

export {Home}