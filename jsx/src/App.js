import React from "react";
import { Hello } from "./Hello"
import  Menu  from "./Menu";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome name="John" age="21" />
                <Menu />
            </div>
        )
    }
}