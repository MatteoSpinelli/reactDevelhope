import { useCounter } from "./useCounter";



export function Counter({ initialValue = 0 }){

    const [counter, handleIncrement, handleDecrement, handleReset] = useCounter(initialValue)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}



