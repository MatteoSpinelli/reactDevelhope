import { createSlice } from "@reduxjs/toolkit";

export const loadingState = createSlice({
    name: "loading",
    initialState: 0,
    reducers: {
        increment: (state, action) => state + 1,
        decrement: (state, action) => state - 1
    }
})