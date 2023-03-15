import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Hello } from "./Hello"
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome name="John" age="21" />
                <ClickCounter initialValue={15} />
            </div>
        )
    }
}