import React, {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { PostCard } from '../../components/PostCard/PostCard';
import { getAllPosts } from "../../features/post/postSlice";
import { getAllUsers } from '../../features/user/userSlice';
import ExploreCSS from "./Explore.module.css"

function Explore() {
    const {allPosts} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAllPosts());
        dispatch(getAllUsers());
    },[])

  return (
    <section className={`d-flex ${ExploreCSS.container}`}>
        {allPosts.map(post => <PostCard post={post} key={post._id}/>)}
    </section>
  )
}

export default Explore