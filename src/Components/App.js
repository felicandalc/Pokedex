import React from 'react'
import { PokemonsProvider } from './PokemonsContext';
import GlobalScope          from './GlobalScope';

import 'bootstrap/dist/css/bootstrap.min.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <PokemonsProvider>
      {/* Workaround para utilizar Context API - No creo que sea una buena práctica */}
      <GlobalScope />
    </PokemonsProvider>
  )
}