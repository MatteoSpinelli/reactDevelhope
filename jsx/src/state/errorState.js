import { createSlice } from "@reduxjs/toolkit";

export const errorState = createSlice({
    name: "error",
    initialState: false,
    reducers: {
        set: (state, action) => true,
        unset: (state, action) => false,
    }
})