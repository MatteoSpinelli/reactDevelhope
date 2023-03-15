import { useEffect, useState } from "react"

export function GithubUser({ username }){
    let [data, setData] = useState(null)

    async function fetchDataGit(username){
        const res = await fetch(`https://api.github.com/users/${username}`)
        if (res.status === 200){
            const json = await res.json()
            setData(json)
        }
    }

    useEffect(() => {
        fetchDataGit(username)
    }, [username])

    return (
        <div>
            <h1>{data.name}</h1>
            <img src={data.avatar_url} alt="avatar"/>
        </div>
    )
}