import { useEffect, useRef } from "react"

export function CarDetails({ initialData }){
    const formRef = useRef()

    
    useEffect(() => {
        for (let input of formRef.current.elements){
            input.value = initialData[input.name]
        }
    }, [initialData])

    return (
        <form ref={formRef}>
            <input type="text" name="model" placeholder="model"/>
            <input type="text" name="year" placeholder="year"/>
            <input type="text" name="color" placeholder="color"/>
        </form>
    )
}