import React from 'react'

export default function ShowPokemon({data}) {
    const { img, name, exp, abilities, egg, color, shape} = data
  return (
    <div>
        <h1>Data of pokemon: {name}</h1>
        <img src={img} alt="img"/>
        <ul>
            <li>{exp}</li>
            {abilities.map((item) => {
                return <li>{item.ability.name}</li>
            })}
            {egg && <li>{egg.map((item) => item.name)}</li>}
            {color && <li>{color.name}</li>}
            {shape && <li>{shape.name}</li>}
        </ul>
    </div>
  )
}
