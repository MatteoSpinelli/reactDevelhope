import { createSlice } from "@reduxjs/toolkit";

export const usersState = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        add: (state, action) => [...state, action.payload],
        edit: (state, action) => state.map((user) => user.id === action.payload.id ? {...user, ...action.payload.data} : user),
        remove: (state, action) => state.filter((user) => user.id !== action.payload),
        clear: () => []
    }
})