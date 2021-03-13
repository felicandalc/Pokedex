import React from 'react';

import { PokemonsProvider } from '../helpers/PokemonsContext';
import GlobalScope          from '../helpers/GlobalScope';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  
  return (
    <PokemonsProvider>
      <GlobalScope />
    </PokemonsProvider>
  )
}


export default App;