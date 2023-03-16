import React from "react";
import { Form } from "./Form";
import { Hello } from "./Hello"
import { Welcome } from "./Welcome";

export class App extends React.Component {
    state = {
        ren: true
    }

    render() {
        return (
            <div>
                <Hello />
                <Welcome name="John" age="21" />
                <Form />
            </div>
        )
    }
}