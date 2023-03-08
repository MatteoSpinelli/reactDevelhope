import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        return (
            <div className="container">
                <p>Welcome, {this.props.name ? this.props.name : "User"}!</p>
                <Age age={this.props.age} />
            </div>
        )
    }
}