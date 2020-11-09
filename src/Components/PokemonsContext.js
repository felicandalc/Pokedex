import React, {useState, createContext} from 'react'


export const PokemonsContext = createContext()

export const PokemonsProvider = props => {
    const [pokemons, setPokemons] = useState(null)

    return(
        <PokemonsContext.Provider value={[pokemons, setPokemons]}>
            {props.children}
        </PokemonsContext.Provider>
    )
}