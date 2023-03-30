import { createSlice } from "@reduxjs/toolkit"

export const pokemonState = createSlice({
    name: "pokemon",
    initialState: {},
    reducers: {
        add: (state, action) => action.payload,
        addMore: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        clear: () => {}
    }
})