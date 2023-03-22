import React from "react";
import { Hello } from "./Hello"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { GithubUser } from "./GithubUser";
import { Pokedex } from "./Pokedex";

export class App extends React.Component{
    render(){
        return (
            <div>
                {/* <Hello />
                <Welcome name="John" age="21" />
                <Counter />
                <GithubUser username = ""/> */}
                <Pokedex />
            </div>
        )
    }
}