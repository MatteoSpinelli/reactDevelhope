import React from "react";
import { Hello } from "./Hello"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { GithubUser } from "./GithubUser";

export class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome name="John" age="21" />
                <Counter />
                <GithubUser username = "MatteoSpinelli"/>
            </div>
        )
    }
}