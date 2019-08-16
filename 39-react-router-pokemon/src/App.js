import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'
import PokemonShow from './components/PokemonShow';
import API from './adapters/API';

import { Button } from 'semantic-ui-react'
import { Route, Switch, Redirect } from 'react-router-dom'
import IndiePokemonShow from './components/IndiePokemonShow';

class App extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ''
  }

  componentDidMount() {
    API.getPokemons()
      .then(pokemons => this.setState({ pokemons }))

    // API.validateUser()
    //   .then(user => {
    //     if (user.invalid) {
    //       this.props.history.push('/login')
    //     } else {
    //       this.setState({ user })
    //     }
    //   })
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

  pokemonShowPage = (props) => {
    const selectedPokemon = this.state.pokemons.find(pokemon => pokemon.id === parseInt(props.match.params.id))
    if (!selectedPokemon) return <div>Loading pokemon</div>
    if (!this.state.user) return <Redirect to="/login" />

    return <PokemonShow {...props} back={() => this.setState({ selectedPokemon: null })} {...selectedPokemon} />
  }

  goHome = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <Button onClick={this.goHome}>go home</Button>
        <Route path={["/", "/pokemons"]} exact component={(props) => <PokemonIndex {...props} selectPokemon={this.selectPokemon} pokemons={this.state.pokemons} />} />
        <Switch>
          <Route path={["/pokemons/:id"]} exact component={this.pokemonShowPage} />
          <Route path={["/pokemons/:id"]} exact component={IndiePokemonShow} />
        </Switch>
      </div>
    )
  }


}

export default App
