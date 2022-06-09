import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PostCard } from '../../components/PostCard/PostCard'
import { ProfileCard } from '../../components/ProfileCard/ProfileCard'
import { getAllPosts } from '../../features/post/postSlice';
import { getAllUsers } from '../../features/user/userSlice';
import ProfileCSS from "./Profile.module.css"

function Profile() {
  const [feedPosts, setFeedPosts] = useState([]);
  const {user} = useSelector(state => state.auth);
  const {allPosts} = useSelector(state => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    if (allPosts) {
      setFeedPosts(
        allPosts.filter(
          (post) =>
            post.username === user.username ||
            user.following.find((person) => post.username === person.username)
        )
      );
    }
  },[user, allPosts]);
  return (
    <div className={`d-flex ${ProfileCSS.container}`}>
        <ProfileCard user={user}/>
        {feedPosts.map(post => <PostCard post={post} key={post._id}/>)}
    </div>
  )
}

export {Profile}