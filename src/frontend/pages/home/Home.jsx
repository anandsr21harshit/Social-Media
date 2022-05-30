import React, { useEffect } from 'react'
import { NewPost } from '../../components/NewPost/NewPost'
import { PostCard } from '../../components/PostCard/PostCard'
import HomeCSS from  "./Home.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../features/post/postSlice'
import { getAllUsers } from '../../features/user/userSlice'

function Home() {
  const {allPosts} = useSelector(state => state.posts);
  const {allUsers} = useSelector( state => state.users);

  // sort allPosts date wise
  // use spread operator to stop mutation
  const feePosts = [...allPosts].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllPosts())
    dispatch(getAllUsers())
  },[])

  return (
    <section className={`d-flex ${HomeCSS.container}`}>
        <NewPost/>
        {feePosts.map(post => <PostCard post={post} key={post._id}/> )}
    </section>
  )
}

export {Home}