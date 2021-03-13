import React, { useContext } from 'react'

import { PokemonsContext }   from '../helpers/PokemonsContext';

import Pokemon from '../atoms/Pokemon';


const Pokemons = () => {

  const [pokemons] = useContext(PokemonsContext);

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


export default Pokemons;