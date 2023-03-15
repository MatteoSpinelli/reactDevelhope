import { useGithubUser } from "./useGithubUser"

export function GithubUser({ username }){
    const data = useGithubUser(username)

    return (
        <div>
            <h1>{data.name}</h1>
            <img src={data.avatar_url} alt="avatar"/>
        </div>
    )
}