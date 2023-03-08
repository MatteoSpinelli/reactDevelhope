import React from "react";

export class UncontrolledLogin extends React.Component {
    _form = React.createRef()



    controlButton = () => {
        if (this._form.current?.elements.username.value && this._form.current?.elements.password.value) {
            this._form.current.elements.login.disabled = false
        } else {
            this._form.current.elements.login.disabled = true
        }
    }

    handleClickReset = (event) => {
        event.preventDefault()
        this._form.current.elements.username.value = ""
        this._form.current.elements.password.value = ""
        this._form.current.elements.remember.checked = false

    }

    componentDidMount() {
        this.controlButton()
    }


    render() {
        return (
            <form ref={this._form}>
                <for>Username:</for>
                <input type="text" name="username" onChange={this.controlButton} />
                <for>Password:</for>
                <input type="password" name="password" onChange={this.controlButton} />
                <for>Remember:</for>
                <input type="checkbox" name="remember" />
                <br />
                <button name="login"onClick={
                    (event) => {
                        event.preventDefault()
                        this.props.onlogin("some text")
                    }
                }>Login</button>
                <button onClick={this.handleClickReset}>Reset</button>
            </form>
        )
    }
}