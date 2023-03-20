import React from "react";
import { Hello } from "./Hello"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Form } from "./Form";
import { Link, Route, Routes } from "react-router-dom"
import { ShowGithubUser } from "./ShowGithubUser";
import { NotFound } from "./NotFound";
import { GithubUserList } from "./GithubUserList";

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
                    <Route path=":username" element={<ShowGithubUser />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}