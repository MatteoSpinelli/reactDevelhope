import React from "react";
import { Welcome } from "./Welcome"
export class InteractiveWelcome extends React.Component{

    state = {
        name: ""
    }

    handleChange = (evt) => {
        this.setState((state) => {
            return {
                name: evt.target.value
            }
        })
    }   

    render(){
        return (
            <div>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <Welcome name={this.state.name} age="21" />
            </div>
        )
    }
}