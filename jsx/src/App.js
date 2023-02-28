import React from "react";
import { Hello } from "./Hello"
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";

export class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome name="John" age="21" />
                <ClickCounter  />
            </div>
        )
    }
}