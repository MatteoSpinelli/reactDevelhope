import { useMemo } from "react";


export function FilteredList({ objs }) {
    const filteredValues = useMemo(() => {
        return objs.filter((obj) => obj.age >= 18)
    }, [objs])
    return (
        <div>
            {filteredValues.map((el) => {
                return <h1 key={el.id}>{el.name}, {el.age}</h1>
            })}
        </div>
    )
}