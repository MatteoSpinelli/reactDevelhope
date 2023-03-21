import { useGithubUser } from "./useGithubUser"

export function GithubUser({ username }) {
    const { user, error, isLoad } = useGithubUser(username)

    return (
        <div>
            {isLoad && <h1>Loading...</h1>}
            {error && <h1>{String(error)}</h1>}
            {user && (
                <div>
                    <h1>{user.name}</h1>
                </div>
            )}
        </div>
    )
}