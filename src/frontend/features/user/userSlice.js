import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getAllUserService } from "../../service/userService";

export const getAllUsers = createAsyncThunk(
    "user/getAllUsers",
    async(_,thunkAPI) => {
        try{
            const response = await getAllUserService();

            return response.data.users;
        }
        catch(error){
            thunkAPI.rejectWithValue(error.response);
        }
    }
)

export const userSlice = createSlice({
    name:"user",
    initialState:{
        allUsers: []
    },
    reducers:{},
    extraReducers:{
        [getAllUsers.fulfilled]: (state, action) => {
            state.allUsers = action.payload;
        }
    }
})

export default userSlice.reducer;