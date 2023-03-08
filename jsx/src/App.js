import React from "react";
import { Login } from "./Login";

export class App extends React.Component{
    onlogin(data){
        console.log(data)
    }
    render(){
        return (
            <div>
                <Login onlogin={this.onlogin}/>
            </div>
        )
    }
}