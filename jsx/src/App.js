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
                <Sum nums={[1,2,3,4,5,6,7,8,9,10]} />
            </div>
        )
    }
}