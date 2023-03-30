import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import { counterState } from './CounterState'
import { delayActionMiddleware } from './delayAction'
import { loadingState } from './LoadingState'
import { logginMiddleware } from './loggingMiddleware'
import { thankMiddleware } from './thunkMiddleware'
import { usersState } from './UsersState'
import { errorState } from './errorState'
import { pokemonState } from './pokemonState'

export const store = configureStore({
    reducer: {users: usersState.reducer, counter: counterState.reducer, loading: loadingState.reducer, error: errorState.reducer, pokemon: pokemonState.reducer},
    middleware: [logginMiddleware, thankMiddleware, delayActionMiddleware],
    devTools: composeWithDevTools
})

