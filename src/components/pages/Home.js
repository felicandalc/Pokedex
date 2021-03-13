import React, { useState, useEffect, useContext, useRef } from 'react';

import { PokemonsContext } from '../helpers/PokemonsContext';

import SearchBar     from '../atoms/SearchBar';
import CleanDivider  from '../atoms/CleanDivider';
import Pokemons      from '../molecules/Pokemons';
import Footer        from '../organisms/Footer';
import LoadingScreen from '../atoms/LoadingScreen';


const Home = () => {

    const cache                     = useRef({});
    const [isLoading, setIsLoading] = useState(true);
    const [, setPokemons]           = useContext(PokemonsContext);
    const [url]                     = useState('https://pokeapi.co/api/v2/pokemon?limit=1050');

    useEffect(() => {

        (async () => {

            if (!url) return;

            if (cache.current[url]) {
                const data = cache.current[url];
                setPokemons(data.results);
                setIsLoading(false);
            }

            try {
                const res  = await fetch(url);
                const data = await res.json();
                setPokemons(data.results);

                if (!res.ok) {
                    throw Error(res.statusText);
                }

                setIsLoading(false);

            } catch (e) {
                console.log(e);
            }
        })();
    });

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


export default Home;