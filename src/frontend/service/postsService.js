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

export const editPostService = (postData, token) =>
  axios.post(
    `/api/posts/edit/${postData._id}`,
    { postData },
    { headers: { authorization: token } }
  );

export const deletePostService = (postId, token) =>
  axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: token,
    },
  });

export const addBookmarkService = (postId, token) => 
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    { headers: { authorization: token } }
  );

export const removeBookmarkService = (postId, token) =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token
      }
    }
  )

export const likePostService = (postId,token)=>
axios.post(
  `/api/posts/like/${postId}`,
  {},
  {
    headers: {
      authorization: token
    }
  }
)

export const dislikePostService = (postId, token) =>
axios.post(
  `/api/posts/dislike/${postId}`,
  {},
  {
    headers: {
      authorization: token
    }
  }
)

export const addCommentService = (commentData,postId, token) =>
  axios.post(
    `/api/comments/add/${postId}`,
    {commentData},
    {
      headers: {
        authorization: token
      }
    }
  )
