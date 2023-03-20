import React from "react";
import { Hello } from "./Hello"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Form } from "./Form";
import { Route, Routes } from "react-router-dom"

export function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Welcome name="Matteo" age={21} />} />
            </Routes>
        </div>
    )
}