import React from "react";

import BreadContainer from "./components/BreadContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

import brownImage from './images/brown.jpg'
import seededImage from './images/seeded.jpg'
import ryeImage from './images/rye.jpg'
import dustImage from './images/dust.jpg'
import glueImage from './images/glue.jpg'
import skittlesImage from './images/skittles.jpg'

// const breadArray = ["brown", "seeded", "rye", "dust", "glue", "skittles"];
const breadArray = [
  {
    name: "brown",
    image: brownImage,
    toasted: false
  },
  {
    name: "seeded",
    image: seededImage,
    toasted: true
  },
  {
    name: "rye",
    image: ryeImage,
    toasted: true
  },
  {
    name: "dust",
    image: dustImage,
    toasted: true
  },
  {
    name: "glue",
    image: glueImage,
    toasted: true
  },
  {
    name: "skittles",
    image: skittlesImage,
    toasted: true
  }
]

console.log({ breadArray })

class App extends React.Component {

  state = {
    breadArray: breadArray,
    toastedFilter: false
  }

  toggleToastedStatus = bread => {
    console.log('change state of bread', bread)
    this.setState({
      breadArray: this.state.breadArray.map(b => {
        if (b.name !== bread.name) return b;

        b.toasted = !b.toasted;
        return b
      })
    })
  }

  toggleToastedFilter = () => {
    this.setState({
      toastedFilter: !this.state.toastedFilter
    })
  }

  render() {

    const { breadArray, toastedFilter } = this.state
    // const breadArray = this.state.breadArray

    const filteredBreadArray = breadArray.filter(bread => {
      if (toastedFilter) {
        return bread.toasted;
      } else {
        return true
      }
    })

    return (
      <div>
        <Header />
        <BreadContainer
          toasted={toastedFilter}
          toggleToastedFilter={this.toggleToastedFilter}
          people={["dan", "bob"]}
          breadList={filteredBreadArray}
          toggleToastedStatus={this.toggleToastedStatus}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
