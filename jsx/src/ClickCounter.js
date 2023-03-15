import { useEffect, useState } from "react"

export function ClickCounter({ initialValue = 0, onCounterChange }) {
    let [counter, setCounter] = useState(initialValue)
    function handleClickCounter() {
        setCounter(c => c + 1)
    }

    useEffect(() => {
        onCounterChange(counter)
    }, [counter, onCounterChange])

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleClickCounter}>increment</button>
        </div>
    )
}