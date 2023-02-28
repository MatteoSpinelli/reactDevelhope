import React from "react";

export class ClickTracker extends React.Component{
    state = {
        lastButton: ""
    }
    handleButtonClick = (evt) => {
        this.setState({
            lastButton: evt.target.textContent
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.handleButtonClick}>1</button>
                <button onClick={this.handleButtonClick}>2</button>
                <button onClick={this.handleButtonClick}>3</button>
                <h1>{this.state.lastButton}</h1>
            </div>
        )
    }
}