import React from 'react';
import './App.css';
import GameList from './components/GameList';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <GameList />
      </div>
    );
  }
}

export default App;
