import axios from "axios"
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { getAllPostsService, addPostService, editPostService, deletePostService } from "../../service/postsService";

export const getAllPosts = createAsyncThunk(
    "posts/getAllPosts",
    async (_,thunkAPI)=>{
        try{
            const response = await getAllPostsService();
            
            return response.data.posts;
        }
        catch(err){
            thunkAPI.rejectWithValue(err.response);
        }
    }
)

export const addUserPost = createAsyncThunk(
    "posts/addUserPost",
    async(postData, thunkAPI) => {
        try{
            const token = JSON.parse(localStorage.getItem("loginCred")).token;
            const response = await addPostService(postData, token);

            return response.data.posts;
        }
        catch(err){
            thunkAPI.rejectWithValue(err.response);
        }
    }
)

export const editUserPost = createAsyncThunk(
    "posts/editUserPost",
    async(postData, thunkAPI) => {
        try{
            const token = JSON.parse(localStorage.getItem("loginCred")).token;
            const response = await editPostService(postData, token);

            
            return response.data.posts;
        }
        catch(err){
            thunkAPI.rejectWithValue(err.response);
        }
    }
)

export const deleteUserPost = createAsyncThunk(
    "posts/deleteUserPost",
    async(id, thunkAPI) => {
        try{
            const token = JSON.parse(localStorage.getItem("loginCred")).token;
            const response = await deletePostService(id,token);
            return response.data.posts;
        }
        catch(err){
            thunkAPI.rejectWithValue(err.response);
        }
    }
)

export const postSlice = createSlice({
    name:"posts",
    initialState:{
        allPosts:[],
        userPosts:[],
        postStatus: false
    },
    reducers:{},
    extraReducers:{
        [getAllPosts.pending]: (state) =>{
            state.postStatus = false;
        },
        [getAllPosts.fulfilled]: (state,action) => {
            state.allPosts = action.payload;
        },
        [getAllPosts.rejected]: (state,action) => {
            state.postStatus = false;
            state.allPosts = action.payload;
        },
        [addUserPost.pending]: (state, action) => {
            state.postStatus = false;
        },
        [addUserPost.fulfilled]: (state, action) => {
            state.allPosts = action.payload;
        },
        [addUserPost.rejected]: (state, action) => {
            state.postStatus = false
            state.allPosts = action.payload;
        },
        [editUserPost.fulfilled]: (state, action) => {
            state.allPosts = action.payload;
        },
        [deleteUserPost.fulfilled]: (state, action) => {
            state.allPosts = action.payload;
        }
    }
})

export default postSlice.reducer