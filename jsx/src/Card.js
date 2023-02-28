import React from "react";

export class Card extends React.Component{
    render(){
        return <p style={{backgroundColor: "red"}}>{this.props.str}</p>
    }
}