import React, { useEffect, useRef, useState } from 'react'
import ShowPokemon from './ShowPokemon'
import { errorState } from './state/errorState'
import { loadingState } from './state/LoadingState'
import { pokemonState } from './state/pokemonState'
import { store } from './state/Store'

function fetchPokemon(namePokemon, setPokemon) {
    return async (dispatch) => {
        dispatch(loadingState.actions.increment())
        dispatch(errorState.actions.unset())
        dispatch(pokemonState.actions.clear())
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
            const pokemon = await res.json()
            if (namePokemon === "") {
                dispatch(errorState.actions.set())
            } else {
                dispatch(pokemonState.actions.add({
                    img: pokemon.sprites.front_default,
                    name: pokemon.name,
                    exp: pokemon.base_experience,
                    abilities: pokemon.abilities,
                }))
            }
        } catch {
            dispatch(errorState.actions.set())
        } finally {
            dispatch(loadingState.actions.decrement())
            setPokemon(Math.random())
        }

    }
}
function fetchPokemonMore(namePokemon, setPokemon) {
    return async (dispatch) => {
        dispatch(loadingState.actions.increment())
        dispatch(errorState.actions.unset())
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${namePokemon}`)
            const pokemonSpecies = await res.json()
            if (namePokemon === "") {
                dispatch(errorState.actions.set())
            } else {
                dispatch(pokemonState.actions.addMore({
                    egg: pokemonSpecies.egg_groups,
                    color: pokemonSpecies.color,
                    shape: pokemonSpecies.shape
                }))
            }
        } catch {
            dispatch(errorState.actions.set())
        } finally {
            dispatch(loadingState.actions.decrement())
            setPokemon(Math.random())
        }
    }
}


export function Pokedex() {
    const [pokemon, setPokemon] = useState(store.getState().pokemon)
    const inputRef = useRef()

    function handleSearch() {
        store.dispatch(fetchPokemon(inputRef.current.value, setPokemon))
    }

    function handleMoreInfo() {
        store.dispatch(fetchPokemonMore(inputRef.current.value, setPokemon))
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleMoreInfo}>More Info</button>
            {/* data */}
            {!!store.getState().loading && <h1>Loading...</h1>}
            {store.getState().error && <h1>Error!</h1>}
            {( Object.keys(store.getState().pokemon).length !== 0 ) && <ShowPokemon data={store.getState().pokemon} />}
        </div>
    )
}
