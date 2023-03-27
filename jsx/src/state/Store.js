import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux'
import { counterState } from './CounterState'
import { delayAction, delayActionMiddleware } from './delayAction'
import { logginMiddleware } from './loggingMiddleware'
import { usersState } from './UsersState'

const rootReducer = combineReducers({
    counter: counterState.reducer,
    users: usersState.reducer
})

export const store = createStore(rootReducer, applyMiddleware(logginMiddleware, delayActionMiddleware))

