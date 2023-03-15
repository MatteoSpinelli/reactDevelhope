import { useState } from "react"

export function ClickCounter({ initialValue = 0 }){
    let [counter, setCounter] = useState(initialValue)
    function handleClickCounter(){
        setCounter(c => c + 1)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleClickCounter}>increment</button>
        </div>
    )
}