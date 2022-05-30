import { createSlice } from "@reduxjs/toolkit";


const postModalSlice = createSlice({
    name:"postModal",
    initialState:{
        isModalOpen: false,
        postData: {}
    },
    reducers:{
        openModal: (state,action) => {
            state.isModalOpen = true;
            state.postData = action.payload
        },
        closeModal: (state,action) => {
            state.isModalOpen = false;
            state.postData = {}
        }
    }
})

export const {openModal , closeModal} = postModalSlice.actions;
export default postModalSlice.reducer;