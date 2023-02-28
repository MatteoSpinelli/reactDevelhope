import React from "react";
import { Hello } from "./Hello"
import { Welcome } from "./Welcome";
import { ClickTracker } from "./ClickTracker";

export class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome name="John" age="21" />
                <ClickTracker  />
            </div>
        )
    }
}