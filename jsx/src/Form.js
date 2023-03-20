import { useForm } from "./useForm";

export function Form() {
    const { username, password, handleChange } = useForm()
    return (
        <form>
            <input type="text" name="username" value={username} onChange={handleChange}/>
            <input type="password" name="password" value={password} onChange={handleChange}/>
        </form>
    )
}