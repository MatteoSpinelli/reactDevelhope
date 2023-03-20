import React from "react";
import { Hello } from "./Hello"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Form } from "./Form";
import { Link, Route, Routes } from "react-router-dom"
import { ShowGithubUser } from "./ShowGithubUser";
import { NotFound } from "./NotFound";
import { GithubUserList } from "./GithubUserList";
import { FilteredList } from "./FilteredList";


const objs = [
    {
        name: "matteo",
        id: 1,
        age: 21
    },
    {
        name: "giorgio",
        id: 2,
        age: 1
    },

    {
        name: "olivia",
        id: 3,
        age: 19
    },
    {
        name: "asia",
        id: 4,
        age: 20
    },
    {
        name: "marco",
        id: 5,
        age: 12
    }
]

export function App() {
    return (
        <div className="container">
            <div>
                <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/users">User</Link>
            </div>
            <Routes>
                <Route path="/" element={<Welcome name="Matteo" age={21} />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/users" element={<GithubUserList />}>
                    <Route index element={<h2>Add a user and select it</h2>} />
                    <Route path=":username" element={<ShowGithubUser />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>

            <FilteredList objs={objs} />
        </div>
    )
}