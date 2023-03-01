import { createSlice } from "@reduxjs/toolkit";

const isLoginSlice = createSlice({
    name: "isLogin",
    initialState: false,
    reducers: {
        setIsLogin: (state,action) => action.payload 
    }
})

export default isLoginSlice.reducer;

export const { setIsLogin } = isLoginSlice.actions;

