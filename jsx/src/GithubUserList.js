import { useState } from "react"
import { Link, Outlet, Route } from "react-router-dom"
import { GithubUser } from "./GithubUser"

export function GithubUserList(){
    let [userList, setUserList] = useState([])
    let [username, setUsername] = useState("")
    

    function handleChange(evt){
        setUsername(evt.target.value)
    }

    function handleAddList(){
        setUserList((userList) => {
            console.log([...userList, username])
            return [...userList, username]
        })
    }

    return (
        <div>
            
            <input type="text" name="username" value={username} onChange={handleChange}/>
            <button onClick={handleAddList}>Add</button>
            {userList.map((user) => {
                return <Link key={user} to={`/users/${user}`}>{user}</Link>
            })}
            <Outlet />
        </div>
    )
}