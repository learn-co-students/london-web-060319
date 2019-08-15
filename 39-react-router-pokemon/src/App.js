import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'
import PokemonShow from './components/PokemonShow';
import API from './adapters/API';

class App extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ''
  }

  componentDidMount() {
    API.getPokemons()
      .then(pokemons => this.setState({ pokemons }))
  }


  addPokemon = newPokemon => {
    API.postPokemon(newPokemon)
      .then(pokemon => this.setState({
        pokemons: [...this.state.pokemons, pokemon]
      }))
  }

  selectPokemon = pokemon => this.setState({
    selectedPokemon: pokemon
  })

  render() {
    return (
      <div className="App">
        {
          this.state.selectedPokemon ?
            <PokemonShow back={() => this.setState({ selectedPokemon: null })} {...this.state.selectedPokemon} /> :
            <PokemonIndex pokemons={this.state.pokemons} selectPokemon={this.selectPokemon} />
        }

      </div>
    )
  }


}

export default App
