import React from "react";
import { Hello } from "./Hello"
import { Login } from "./Login";

export class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Login />
            </div>
        )
    }
}