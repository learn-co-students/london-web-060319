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
    available: true
  },
  {
    name: "seeded",
    image: seededImage,
    available: true
  },
  {
    name: "rye",
    image: ryeImage,
    available: true
  },
  {
    name: "dust",
    image: dustImage,
    available: true
  },
  {
    name: "glue",
    image: glueImage,
    available: true
  },
  {
    name: "skittles",
    image: skittlesImage,
    available: true
  }
]

console.log({breadArray})

function App() {
  return (
    <div>
      <Header />
      <BreadContainer
        toasted={false}
        people={["dan", "bob"]}
        breadList={breadArray}
      />
      <Footer />
    </div>
  );
}

export default App;
