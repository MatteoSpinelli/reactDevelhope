import {createRoot} from "react-dom/client"
import { counterState, decrementCounter, incrementCounter, resetCounter } from "./state/CounterState"
import { store } from "./state/Store"
import { App } from "./App"
import { addUser, editUser, removeUser, usersState } from "./state/UsersState"
import { delayAction } from "./state/delayAction"

const root = createRoot(document.getElementById("root"))
/* root.render(<App />) */

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(delayAction(counterState.actions.increment(5), 5000))
store.dispatch(counterState.actions.decrement(3))
store.dispatch(counterState.actions.decrement(6))
store.dispatch(counterState.actions.reset())

store.dispatch(usersState.actions.add({id: 1, name:"jimmy", age: 37}))
store.dispatch(usersState.actions.add({id: 2, name:"Kate", age: 27}))
store.dispatch(usersState.actions.remove(1))
store.dispatch(usersState.actions.edit({id: 2, data: {age:99}}))
