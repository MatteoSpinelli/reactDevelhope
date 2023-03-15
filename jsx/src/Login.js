import React, { useState } from "react";

export function Login({ onlogin }) {
    let [data, setData] = useState({
        username: "",
        password: "",
        remember: ""
    })

    function handleChange(evt){
        const { name, value, type, checked } = evt.target
        setData((data) => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function controlButton(){
        return !(data.username && data.password)
    }

    return (
        <form>
            <for>Username:</for>
            <input type="text" name="username" value={data.username} onChange={handleChange} />
            <for>Password:</for>
            <input type="password" name="password" value={data.password} onChange={handleChange} />
            <for>Remember:</for>
            <input type="checkbox" name="remember" checked={data.remember} onChange={handleChange} />
            <br />
            <button disabled={controlButton()} onClick={
                (event) => {
                    event.preventDefault()
                    onlogin(data)
                }
            }>Login</button>
        </form>
    )
}

