import React from 'react'

import Filters from './components/Filters'
import PetBrowser from './components/PetBrowser'

import API from './adapters/API'

class App extends React.Component {
  state = {
    pets: [],
    filterOptions: [
      {
        key: "All",
        value: "all"
      },
      {
        key: "Cats",
        value: "cat"
      },
      {
        key: "Dogs",
        value: "dog"
      },
      {
        key: "Micropigs",
        value: "micropig"
      }
    ],
    filters: {
      type: 'dog'
    }
  }

  changeFilter = type => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type
      }
    })
  }

  performSearch = () => {
    if (this.state.filters.type === 'all') {
      API.getAllPets()
        .then(pets => this.setState({ pets }))
    } else {
      API.getPetsOfType(this.state.filters.type)
        .then(pets => this.setState({ pets }))
    }
  }

  adoptPet = petId => {
    this.setState({
      pets: this.state.pets.map(pet => {
        if (pet.id !== petId) return pet;

        pet.isAdopted = true;

        return pet;
      })
    })
  }

  render() {
    const { filterOptions, filters, pets } = this.state

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters options={filterOptions} value={filters.type} handleFilter={this.changeFilter} performSearch={this.performSearch} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={pets} adoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
