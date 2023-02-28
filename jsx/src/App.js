import React from "react";
import { Hello } from "./Hello"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome name="John" age="21" />
                <Counter initialValue = {5} incrementInterval = {100} incrementAmount = {20} />
            </div>
        )
    }
}