import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonIndex extends React.Component {
  state = {
    searchTerm: ''
  }


  updateSearchTerm = searchTerm => this.setState({ searchTerm })

  filterPokemons = () => this.props.pokemons.filter(
    pokemon => pokemon.name.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())
  )


  render() {

    const pokemons = this.filterPokemons()

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(e, { value }) => this.updateSearchTerm(value)} showNoResults={false} value={this.state.searchTerm} />
        <br />
        <PokemonCollection pokemons={pokemons} handlePokemonClick={this.props.selectPokemon} />
        <br />
        <PokemonForm onSubmit={this.addPokemon} />
      </div>
    )
  }
}

export default PokemonIndex
