import React from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import Home from './Home'
import SinglePokemon from './SinglePokemon'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={withRouter(Home)} />
          <Route exact path="/pokemon/:index" component={(props) => <SinglePokemon {...props} key={window.location.pathname}/>}/>
        </Switch>
      </div>
    </Router>
  )
}