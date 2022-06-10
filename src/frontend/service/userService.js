import axios from "axios";

export const getAllUserService = () => axios.get("/api/users");

export const updateUserService = (userData, token) =>
  axios.post(
    "/api/users/edit",
    { userData },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const followUserService = (followUserId, token) =>
    axios.post(`/api/users/follow/${followUserId}`,
      {},
      {
        headers:{
          authorization: token
        }
      }
    )

export const unfollowUserService = (followUserId,token) => 
  axios.post(`/api/users/unfollow/${followUserId}`,
  {},
  {
    headers: {
      authorization: token
    }
  })
