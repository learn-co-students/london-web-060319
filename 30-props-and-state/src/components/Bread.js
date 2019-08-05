import React from "react";

function Bread(props) {
  return (
    <li>
      <p>{props.bread}</p>
      <button>toast me</button>
    </li>
  );
}

export default Bread;
