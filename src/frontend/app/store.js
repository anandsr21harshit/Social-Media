import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import postReducer from "../features/post/postSlice"
import userReducer from "../features/user/userSlice"
import postModalReducer from "../features/post/postModalSlice"

export const store = configureStore({
    reducer:{
        auth: authReducer,
        posts: postReducer,
        users: userReducer,
        postModal: postModalReducer
    }
})