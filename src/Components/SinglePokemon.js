import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
function SinglePokemon (props) {  
  const [isLoading, setIsLoading]       = useState(true);
  const [imageUrl, setImageUrl]         = useState(null)
  const [name, setName]                 = useState(null)
  const [heightMeters, setHeightMeters] = useState(null)
  const [heightFeets, setHeightFeets]   = useState(null)
  const [weightLbs, setWeightLbs]       = useState(null)
  const [weightKg, setWeightKg]         = useState(null)
  const [types, setTypes]               = useState([])
  const [abilities, setAbilities]       = useState([])
  const [index]                         = useState(parseInt(props.match.params.index))
  const [pokemonName]                   = useState(props.match.params.pokemonName)
  const [next]                          = useState(index + 1)
  const [back]                          = useState(index - 1)

  const TYPE_BG = {
    GRASS: '78c850',
    FIRE: 'F08030',
    WATER: '6890F0',
    BUG: 'A8B820',
    NORMAL: 'A8A878',
    POISON: 'A040A0',
    ELECTRIC: 'F8D030',
    GROUND: 'E0C068',
    FAIRY: 'EE99AC',
    FIGHTING: 'C03028',
    PSYCHIC: 'F85888',
    ROCK: 'B8A038',
    GHOST: '705898',
    ICE: '98D8D8',
    DRAGON: '7038F8',
    FLYING: 'A890F0'
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setImageUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`)

    try {
        const res  = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        const data = await res.json()
        console.log(data)

        const name = data.name.split(' ').map( str => str[0].toUpperCase() + str.substring(1))
        setName(name)

        setHeightMeters((data.height * 0.1).toFixed(1))
        setHeightFeets((data.height * 0.328084).toFixed(2))

        setWeightLbs((data.weight * 0.220462).toFixed(2))
        setWeightKg((data.weight * 0.1).toFixed(1))

        const types = data.types.map(type => type.type.name.toUpperCase())
        setTypes(types)

        const abilities = data.abilities.map(ability => {
            return ability.ability.name.split(' ').map( str => str[0].toUpperCase() + str.substring(1))
        })

        setAbilities(abilities)

        setIsLoading(false)

        if (!res.ok) {
            throw Error(res.statusText);
        }
        
    } catch (e) { console.log(e); }

  }, [])

  return (
    <div className="container-fluid SinglePokemon">
        <div className="row h-100 justify-content-center align-items-center">
            <div className="row SinglePokemon__img-container">
                <img src={imageUrl} alt="Pokemon." width="100%" />
            </div>
            <div className="row SinglePokemon__info">

                <h2 className="col-12 SinglePokemon__info__name font-weight-bold">{name} 
                    <span className="font-weight-normal">{` #${index}`}</span>
                </h2>

                <div className="col-6 mt-5">
                    <div className="SinblePokemon__info__height">
                        <p className="SinglePokemon__info__height__title font-weight-bold mb-0">Height</p>
                        <p className="SinglePokemon__info__height__info">
                            {`${heightFeets}ft (${heightMeters}m)`}
                            </p>
                    </div>
                    <div className="SinblePokemon__info__weight">
                        <p className="SinglePokemon__info__weight__title font-weight-bold mb-0">Weight</p>
                        <p className="SinglePokemon__info__weight__info">
                            {`${weightLbs}lbs (${weightKg}kg)`}
                        </p>
                    </div>
                </div>

                <div className="col-6 mt-5">
                    <div className="SinblePokemon__info__height">
                        <p className="SinglePokemon__info__height__title font-weight-bold mb-0">Type</p>
                        <p className="SinglePokemon__info__height__info">
                            {types.map(type => (

                                <span key={type} style={{ background: `#${TYPE_BG[type]}`, color: 'white' }}
                                    className="SinglePokemon__info__height__info--type ml-1">
                                    {`${type}`}
                                </span>

                            ))}
                        </p>
                    </div>
                    <div className="SinblePokemon__info__weight">
                        <p className="SinglePokemon__info__weight__title font-weight-bold mb-0">Abilities</p>
                        <p className="SinglePokemon__info__weight__info">
                            {abilities.map( ability => (
                                <span>{`${ability} `}</span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>

            <Link to="/" className="SinglePokemon__go-home">Volver</Link>

        </div>

        { index < 1500 && 
            <Link to={`/pokemon/${next}`} className="SinglePokemon__go-next" >
                <i className="fas fa-arrow-right"></i>
            </Link>
        }

        { index > 1 &&
            <Link to={`/pokemon/${back}`} className="SinglePokemon__go-back" >
                <i className="fas fa-arrow-left"></i>
            </Link>
        }
    </div>
  )
}

export default withRouter(SinglePokemon)