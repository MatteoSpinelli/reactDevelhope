import React from "react";

export class Login extends React.Component{

    state = {
        username: "",
        password: "",
        remember: false
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
        this.setState({
            [name]: value
        })
    }

    controlButton = () => {
        return !(this.state.username && this.state.password)
    }


    render(){
        return (
            <form>
                <for>Username:</for>
                <input type="text" name = "username" value={this.state.username} onChange={this.handleChange}/>
                <for>Password:</for>
                <input type="password" name = "password" value={this.state.password} onChange={this.handleChange}/>
                <for>Remember:</for>
                <input type="checkbox" name = "remember" checked={this.state.remember} onChange={this.handleChange}/>
                <br/>
                <button disabled={this.controlButton()} onClick={
                    (event) => {
                        event.preventDefault()
                        this.props.onlogin(this.state)
                    }
                }>Login</button>
            </form>
        )
    }
}