import React from "react";
import { Hello } from "./Hello"
import { InteractiveWelcome } from "./InteractiveWelcome";

export class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <InteractiveWelcome />
            </div>
        )
    }
}