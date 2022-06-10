import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PostCard } from '../../components/PostCard/PostCard';
import { ProfileCard } from '../../components/ProfileCard/ProfileCard'
import { getAllPosts } from '../../features/post/postSlice';
import { getAllUsers } from '../../features/user/userSlice';
import UserProfileCSS from "./UserProfile.module.css";

function UserProfile() {
  const {username} = useParams();

  const {allUsers} = useSelector(state => state.users);
  const {allPosts} = useSelector(state => state.posts)

  const [singleUser, setSingleUser] = useState({});
  const [feedPosts, setFeedPosts] = useState([]);

  useEffect(()=>{
    setSingleUser(allUsers.find(user => user.username === username));
  },[allUsers, username])

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
            post.username === username
        )
      );
    }
  },[singleUser, allPosts]);

  return (
    <div className={`d-flex ${UserProfileCSS.container}`}>
      {singleUser && <ProfileCard user={singleUser}/>}
      {feedPosts.map((post => <PostCard post={post} key={post._id}/>))}
    </div>
  )
}

export default UserProfile