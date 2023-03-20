import { useState } from "react";

/* export function useForm(){
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    function handleChange(evt){
        const { name, value } = evt.target
        setData(d => {
            return {
                ...d,
                [name]: value
            }
        })
    }

    return {
        ...data,
        handleChange
    }

} */


export function useForm(){
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    function handleChange(evt){
        const { name, value } = evt.target
        setData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    return {
        username: data.username,
        password: data.password,
        handleChange
    }

}