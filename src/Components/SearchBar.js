import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      pokemonId: null,
      redirect: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({ pokemonId: e.target.value })
  }

  handleSubmit (e)  {
    e.preventDefault()
    this.props.history.push(`/pokemon/${this.state.pokemonId}`)
  }

  render() {
    return (
      <div className="SearchBar mb-5">
          <form onSubmit={this.handleSubmit} className="d-flex">
            <input className="SearchBar__Box" 
                   type="text" 
                   name="searchbox" 
                   placeholder="Buscar pokemón"
                   onChange={this.handleChange} />
            <button className="SearchBar__Button">
              <i className="fas fa-search"></i>
            </button>
          </form>
      </div>
    )
  }
}

export default withRouter(SearchBar)