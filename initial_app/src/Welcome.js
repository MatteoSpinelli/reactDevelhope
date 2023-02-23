import React from "react";

export class Welcome extends React.Component{
    render(){
        console.log(this)

        return <h2>Welcome, {this.props.name}</h2>
    }
}