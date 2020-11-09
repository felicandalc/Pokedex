import React, { useContext } from 'react'
import { PokemonsContext }   from './PokemonsContext';
import Pokemon from './Pokemon'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => { 
  const [pokemons, setPokemons] = useContext(PokemonsContext);

  return (
    <div className="container Pokemons">
        <div className="row">
            {pokemons.map( (pokemon, index) => (
              <Pokemon
                name  = {pokemon.name.split(' ').map( str => str[0].toUpperCase() + str.substring(1))}
                url   = {pokemon.url}
                index = {index + 1}
                key   = {pokemon.name} />
            ))}
        </div>
    </div>
  )
}