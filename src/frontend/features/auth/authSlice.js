import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService, signUpService } from "../../service/authServices";
import { toast } from "react-toastify";

const initialState = {
  token: JSON.parse(localStorage.getItem("loginCred"))?.token,
  user: JSON.parse(localStorage.getItem("loginCred"))?.user,
  isLoading: false,
};

export const loginHandler = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await loginService({ username, password });
      return response.data;
    } catch (err) {
      toast.error("Incorrect Username or Password")
      thunkAPI.rejectWithValue(err.response);
    }
  }
);

export const signUpHandler = createAsyncThunk(
  "auth/signup",
  async ({ username, password, firstName, lastName }, thunkAPI) => {
    try {
      const response = await signUpService({
        username,
        password,
        firstName,
        lastName,
      });
      return response.data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.response);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutHandler: (state) => {
      localStorage.removeItem("loginCred");
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: {
    [loginHandler.pending]: (state) => {
      state.isLoading = true;
    },
    [loginHandler.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload.encodedToken;
      state.user = action.payload.foundUser;
      localStorage.setItem(
        "loginCred",
        JSON.stringify({
          token: action.payload.encodedToken,
          user: action.payload.foundUser,
        })
      );
      toast.success("Successfully Logged In");
    },
    [loginHandler.rejected]: (state) => {
      state.isLoading = false;
    },
    [signUpHandler.pending]: state => {
        state.isLoading = true;
    },
    [signUpHandler.fulfilled]: (state,action) =>{
        state.isLoading = false;
        state.token = action.payload.encodedToken;
        state.user = action.payload.createdUser
        localStorage.setItem(
            "loginCred",
            JSON.stringify({
                token: action.payload.encodedToken,
                user: action.payload.createdUser
            })
        )
    },
    [signUpHandler.rejected]: (state) =>{
        state.isLoading = false
    }
  },
});

// export all actions to use in diff files
export const {logoutHandler} = authSlice.actions

// export the reducer
export default authSlice.reducer
