import React from 'react'

export default function ShowPokemon({ data }) {
    const { img, name, exp, abilities, egg, color, shape } = data
    return (
        <div>
            <h1>Info about {name}</h1>
            <img src={img} alt="" />
            <ul>
                <li>Exp: {exp}</li>
                <li>Abilities:
                    <ul>
                        {abilities.map(item => <li>{item.ability.name}</li>)}
                    </ul>
                </li>
                {egg && <li>Egg groups:
                    <ul>
                        {egg.map(item => <li>{item.name}</li>)}
                    </ul></li>}
                {color && <li>Color: {color.name}</li>}
                {shape && <li>Shape: {shape.name}</li>}
            </ul>
        </div>
    )
}
