import React from 'react';
import './App.css';
import CalculatorContainer from './components/CalculatorContainer';


const Nav = () => (
  <nav>
    <h2>calcul8</h2>
  </nav>
)


class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Nav />
        <CalculatorContainer />
      </div>
    );
  }
}

export default App;
