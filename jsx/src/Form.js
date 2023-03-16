import { useEffect, useState } from "react"


export function Form() {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false,
    })
    const [seeUser, setSeeUser] = useState(false)
    const [seePass, setSeePass] = useState(false)
    const [isFirst, setIsFirst] = useState(true)

    function handleChange(evt) {
        const { name, type, value, checked } = evt.target
        setData((data) => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function controlButton() {
        return !(data.username && data.password)
    }
    

    useEffect(() => {
        console.log(isFirst)
        if (!isFirst){
            if (!data.username) {
                setSeeUser(true)
            } else {
                setSeeUser(false)
            }
            if (!data.password) {
                setSeePass(true)
            } else {
                setSeePass(false)
            }
        }
        if (data.username && data.password){
            setIsFirst(false)
        }
    }, [data])

    return (
        <form>
            <input type="text" name="username" value={data.username} onChange={handleChange} />
            {seeUser && <p>Il campo username è obbligatorio</p>}
            <input type="password" name="password" value={data.password} onChange={handleChange} />
            {seePass && <p>Il campo password è obbligatorio</p>}
            <input type="checkbox" name="remember" checked={data.remember} onChange={handleChange} />
            <button disabled={controlButton()}>Login</button>
        </form>
    )
}