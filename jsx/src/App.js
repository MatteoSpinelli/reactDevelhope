import React from "react";
import { Hello } from "./Hello"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Form } from "./Form";
import { Link, Route, Routes } from "react-router-dom"

export function App() {
    return (
        <div className="container">
            <div>
                <Link to="/">Home</Link> | <Link to="/counter">Counter</Link>
            </div>
            <Routes>
                <Route path="/" element={<Welcome name="Matteo" age={21} />} />
                <Route path="/counter" element={<Counter />} />
            </Routes>
        </div>
    )
}