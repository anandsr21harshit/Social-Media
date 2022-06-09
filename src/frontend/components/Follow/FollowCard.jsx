import React, { useEffect, useState } from "react";
import FollowCSS from "./FollowCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "../../features/user/userSlice";

function FollowCard() {
  const { allUsers } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);
  const [usersToFollow, setUsersToFollow] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setUsersToFollow(
      allUsers.filter(
        (currUser) =>
          currUser.username !== user.username &&
          !user.following.find((ele) => ele._id === currUser._id)
      )
    );
  }, [user, allUsers]);

  const followHandler = (userid) => {
    dispatch(followUser({ followUserId: userid, dispatch }));
  };

  return (
    <>
      {" "}
      {usersToFollow.length > 0 && (
        <section className={`d-flex ${FollowCSS.container}`}>
          {usersToFollow.length > 0 &&
            usersToFollow.map((user) => {
              return (
                <div className={`d-flex ${FollowCSS.card_chip}`} key={user._id}>
                  <img src={user.profilePic} alt="user icon" />
                  <h3>{user.firstName}</h3>
                  <button
                    className="btn btn-primary"
                    onClick={() => followHandler(user._id)}
                  >
                    Follow
                  </button>
                </div>
              );
            })}
        </section>
      )}
    </>
  );
}

export default FollowCard;
