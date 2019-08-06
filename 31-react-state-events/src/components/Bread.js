import React from "react"
import './Bread.css'

function Bread(props) {
  const { name, image, toggleToastedStatus, toasted } = props
  return (
    <li>
      <div className='bread'>
        <p>{name}</p>
        <img src={image} alt={name} />
        {toasted ? "toasted" : "not toasted"}
        <button onClick={toggleToastedStatus}>toast me</button>
      </div>
    </li>
  )
}

export default Bread
