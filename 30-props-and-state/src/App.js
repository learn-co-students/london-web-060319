import React from "react";

import BreadContainer from "./components/BreadContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

const breadArray = ["brown", "seeded", "rye", "dust", "glue", "skitlles"];

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
