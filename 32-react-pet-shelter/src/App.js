import React from 'react'

import Filters from './components/Filters'
import PetBrowser from './components/PetBrowser'

import AllPets from './data/pets'

class App extends React.Component {
  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
