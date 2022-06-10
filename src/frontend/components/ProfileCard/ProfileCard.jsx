import React, { useEffect } from "react";
import { User } from "../User/User";
import ProfileCardCSS from "./ProfileCard.module.css";
import linkedin from "../../assets/linkedin.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features/post/postSlice";
import { useLocation } from "react-router-dom";
import { followUser, getAllUsers, unfollowUser } from "../../features/user/userSlice";

function ProfileCard({ user }) {
  const path = useLocation();

  const { allPosts } = useSelector((state) => state.posts);
  const auth = useSelector(state => state.auth);
  console.log(auth.user);
  const dispatch = useDispatch();

  const countUserPost = allPosts.filter(
    (post) => post.username === user?.username
  ).length;

  useEffect(() => { 
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  }, [user]);

  const followHandler = (userid) => {
    console.log("cliked");
    dispatch(followUser({ followUserId: userid, dispatch }))
  }

  const unfollowHandler = (userid) => {
    console.log("cliked");
    dispatch(unfollowUser({ followUserId: userid, dispatch }))
  }

  const isFollowing = auth.user.following.some(curruser => curruser.username === user.username);
  console.log("Is Following", isFollowing);
  return (
    <div className={ProfileCardCSS.container}>
      <div className={`d-flex ${ProfileCardCSS.header}`}>
        <User
          username={user?.username}
          firstName={user?.firstName}
          lastName={user?.lastName}
          image={user?.profilePic}
          flag={false}
          id={user?._id}
        />
        {path.pathname === "/profile" && <span>Edit</span>}
        {path.pathname !== "/profile" &&
          (isFollowing ? (
            <button className="btn btn-primary" onClick={()=>unfollowHandler(user._id)}>Unfollow</button>
          ) : (
            <button className="btn btn-primary" onClick={()=>followHandler(user._id)}>Follow</button>
          ))}
      </div>
      <article className={ProfileCardCSS.description}>{user?.bio}</article>
      <ul className={`d-flex ${ProfileCardCSS.stats}`}>
        <li>{countUserPost} Posts</li>
        <li>{user?.followers?.length} Followers</li>
        <li>{user?.following?.length} Following</li>
      </ul>
      <section className={ProfileCardCSS.social_media}>
        <a href={`${user?.linkedinURL}`} target="_blank">
          <img src={linkedin} alt="linkedin icon" />
        </a>
      </section>
    </div>
  );
}

export { ProfileCard };
