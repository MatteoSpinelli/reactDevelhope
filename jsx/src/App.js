import React from "react";
import { UncontrolledLogin } from "./UncontrolledLogin";

export class App extends React.Component{
    onlogin(data){
        console.log(data)
    }
    render(){
        return (
            <div>
                <UncontrolledLogin onlogin={this.onlogin}/>
            </div>
        )
    }
}