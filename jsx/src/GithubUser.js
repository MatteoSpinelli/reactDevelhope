import { useGithubUser } from "./useGithubUser"

export function GithubUser({ username }){
    const { data, loading, error, fetchDataGit } = useGithubUser()

    function handleFetch(){
        fetchDataGit(username)
    }

    return (
        <div>
            <button onClick={handleFetch}>fetch</button>
            <h1>{data && data.name}</h1>
            {data && <img src={data.avatar_url} alt="avatar"/>}
            <h1>{loading && "Loading..."}</h1>
            <h1>{error}</h1>
        </div>
    )
}