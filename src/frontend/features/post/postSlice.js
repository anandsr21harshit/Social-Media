import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { getAllPostsService, addPostService } from "../../service/postsService";

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
        [addUserPost.fulfilled]: (state, action) => {
            state.allPosts = action.payload;
        }
    }
})

export default postSlice.reducer