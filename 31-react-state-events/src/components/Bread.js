import React from "react"
import './Bread.css'

function Bread(props) {
  return (
    <li>
      <div className='bread'>
        <p>{props.bread.name}</p>
        <img src={props.bread.image} alt={props.bread.name} />
        <button>toast me</button>
      </div>
    </li>
  )
}

export default Bread
