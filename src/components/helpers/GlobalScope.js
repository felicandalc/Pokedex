import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Home          from '../pages/Home';
import SinglePokemon from '../pages/SinglePokemon';


const GlobalScope = () => {

  return (
    <Router>

        <Switch>
          <Route exact path="/"               component={withRouter(Home)} />
          <Route exact path="/pokemon/:index" component={(props) => <SinglePokemon {...props} key={window.location.pathname}/>}/>
        </Switch>

    </Router>
  )
}


export default GlobalScope;