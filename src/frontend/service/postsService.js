import axios from "axios";

export const getAllPostsService = () => axios.get("/api/posts");

export const addPostService = (postData, token) =>
  axios.post(
    "/api/posts",
    {
      postData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
