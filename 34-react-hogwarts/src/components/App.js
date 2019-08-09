import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer';
import FilterSortOptions from './FilterSortOptions';

class App extends Component {

  state = {
    sortType: 'default',
    sortOptions: ['default', 'weight', 'name'],
    filterOptions: ['all', 'greased', 'ungreased'],
    filterType: 'all'
  }

  setSortType = (sortType) => this.setState({ sortType })
  setFilterType = (filterType) => this.setState({ filterType })

  filterHogs = () => hogs.filter(hog => {
    if (this.state.filterType === 'all') return true;
    if (this.state.filterType === 'greased') return hog.greased;
    if (this.state.filterType === 'ungreased') return !hog.greased;
  })

  sortHogs = (filteredHogs) => filteredHogs.sort((hogA, hogB) =>{
    if(this.state.sortType === 'default') return 0
    if (this.state.sortType === 'weight') {
      return hogB['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] -
        hogA['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    }
    if (this.state.sortType === 'name') {
      return hogA.name.localeCompare(hogB.name)
    }
  })

  render() {

    const filteredHogs = this.filterHogs()
    const sortedHogs = this.sortHogs(filteredHogs)

    return (
      <div className="App">
          < Nav />
          <FilterSortOptions 
            setFilterType={this.setFilterType}
            setSortType={this.setSortType}
            filterType={this.state.filterType}
            sortType={this.state.sortType}
            sortOptions={this.state.sortOptions}
            filterOptions={this.state.filterOptions}
          />
          <HogsContainer hogs={sortedHogs} />
      </div>
    )
  }
}

export default App;
