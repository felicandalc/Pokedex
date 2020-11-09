import React, { useState, useEffect, useContext, useRef } from 'react'
import { PokemonsContext } from './PokemonsContext';
import SearchBar     from './SearchBar'
import CleanDivider  from './CleanDivider'
import Pokemons      from './Pokemons'
import Footer        from './Footer'
import LoadingScreen from './LoadingScreen'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const cache                     = useRef({})
    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons]   = useContext(PokemonsContext);
    const [status, setStatus]       = useState('off');
    const [url]                     = useState('https://pokeapi.co/api/v2/pokemon?limit=1050');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        if (!url) return;
        
        setStatus('fetching')
        if (cache.current[url]) {
            const data = cache.current[url]
            setPokemons(data.results)
            setStatus('fetched')
            setIsLoading(false)
        }
        try {
            const res  = await fetch(url)
            const data = await res.json()
            setPokemons(data.results)

            if (!res.ok) {
                throw Error(res.statusText);
            }

            setIsLoading(false)
            setStatus('fetched');
        
        } catch (e) { console.log(e); }

    }, [])

    return (
        <div className="App">
            <p className="App__title">Pokedex</p>
            <CleanDivider />
            <SearchBar />

            { isLoading ? <LoadingScreen /> : <Pokemons /> }

            <CleanDivider />
            <Footer />
        </div>
    )
}