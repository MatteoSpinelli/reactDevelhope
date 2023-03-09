import React from "react";
import { Container } from "./Container";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    onlogin(data){
        console.log(data)
    }
    render(){
        return (
            <div>
                <Container title="Welcome messages">
                    <Welcome name="Matteo" age={21} />
                    <Welcome name="Luigi" age={19} />
                </Container>
            </div>
        )
    }
}