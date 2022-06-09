import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  followUserService,
  getAllUserService,
  unfollowUserService,
} from "../../service/userService";
import { updateUserProfile } from "../auth/authSlice";

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await getAllUserService();

      return response.data.users;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const followUser = createAsyncThunk(
  "user/followUser",
  async ({ followUserId, dispatch }, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("loginCred")).token;
      const response = await followUserService(followUserId, token);
      dispatch(updateUserProfile(response.data.user));

      return response.data;
    } catch (err) {
      console.error(err.response);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "user/unfollowUser",
  async ({ followUserId, dispatch }, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("loginCred")).token;
      const response = await unfollowUserService(followUserId, token);
      dispatch(updateUserProfile(response.data.user));

      return response.data;
    } catch (err) {
      console.error(err.response);
    }
  }
)
export const userSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
  },
  reducers: {},
  extraReducers: {
    [getAllUsers.fulfilled]: (state, action) => {
      state.allUsers = action.payload;
    },
    [followUser.fulfilled]: (state, action) => {
      state.allUsers = [...state.allUsers].map((user) =>
        user._id === action.payload.followUser._id
          ? action.payload.followUser
          : user
      );
    },
  },
});

export default userSlice.reducer;
