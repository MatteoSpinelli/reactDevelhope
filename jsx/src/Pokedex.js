import { useRef } from "react"
import { useState } from "react"
import ShowPokemon from "./ShowPokemon"


function usePokedex() {
    const [pokemon, setPokemon] = useState(null)
    const [pokemonSpecies, setPokemonSpecies] = useState({})
    const [error, setError] = useState(false)
    const [isLoad, setIsLoad] = useState(false)

    async function searchPoke(namePoke) {
        setError(false)
        setIsLoad(true)
        setPokemon(null)
        setPokemonSpecies({})
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePoke}`)
            const pokemon = await res.json()
            setPokemon(pokemon)
        } catch {
            setError(true)
        } finally {
            setIsLoad(false)
        }
    }

    async function searchPokeSpecies(namePoke) {
        setError(false)
        setIsLoad(true)
        setPokemonSpecies({})
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${namePoke}`)
            const pokemon = await res.json()
            setPokemonSpecies(pokemon)
            console.log(pokemon)
        } catch {
            setError(true)
        } finally {
            setIsLoad(false)
        }
    }

    return {
        pokemon, pokemonSpecies,  error, isLoad, searchPoke, searchPokeSpecies
    }
}



export function Pokedex() {
    const { pokemon, pokemonSpecies, error, isLoad, searchPoke, searchPokeSpecies } = usePokedex()
    const inputRef = useRef()

    function handleSearch() {
        searchPoke(inputRef.current.value)
    }

    function handleMoreInfo() {
        searchPokeSpecies(inputRef.current.value)
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleMoreInfo}>More info</button>
            {/* data */}
            {isLoad && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {pokemon && <ShowPokemon data={{
                img: pokemon.sprites.front_default,
                name: pokemon.name,
                exp: pokemon.base_experience,
                abilities: pokemon.abilities,
                egg: pokemonSpecies.egg_groups,
                color: pokemonSpecies.color,
                shape: pokemonSpecies.shape,
            }} />}
        </div>
    )
}