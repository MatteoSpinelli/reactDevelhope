import { createSlice } from "@reduxjs/toolkit";
import { loadingState, LoadingState } from "./LoadingState";

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

export function fetchUser(username){
    return async (dispatch, getState) => {
        dispatch(loadingState.actions.increment())
        try{
            const res = await fetch(`https://api.github.com/users/${username}`)
            const user = await res.json()
            dispatch(usersState.actions.add({id: user.id, name: user.name, age: 102}))
        } catch {
            console.error("Error while fetching")
        } finally {
            dispatch(loadingState.actions.decrement())
        }
    }
}