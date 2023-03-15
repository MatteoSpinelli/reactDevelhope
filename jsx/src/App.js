import React from "react";
import { Hello } from "./Hello"
import { Sum } from "./Sum";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome name={<strong>Matteo</strong>} age="21" />
                <Sum  />
            </div>
        )
    }
}