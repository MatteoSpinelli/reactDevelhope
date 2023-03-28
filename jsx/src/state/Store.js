import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux'
import { counterState } from './CounterState'
import { delayAction, delayActionMiddleware } from './delayAction'
import { loadingState } from './LoadingState'
import { logginMiddleware } from './loggingMiddleware'
import { thankMiddleware } from './thunkMiddleware'
import { usersState } from './UsersState'

const rootReducer = combineReducers({
    counter: counterState.reducer,
    users: usersState.reducer,
    loading: loadingState.reducer
})

export const store = createStore(rootReducer, applyMiddleware(logginMiddleware, thankMiddleware ,delayActionMiddleware))

