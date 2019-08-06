import React from "react"
import Bread from "./Bread"

function BreadContainer(props) {
  console.log(props)
  const { breadList, toggleToastedStatus, toggleToastedFilter, toasted } = props
  return (
    <div>
      <button onClick={toggleToastedFilter}>{toasted ? "toasted filter ON" : "toasted filter OFF"}</button>
      <ul>
        {breadList.map(bread => {
          return <Bread {...bread} key={bread} toggleToastedStatus={() => toggleToastedStatus(bread)} />
        })}
      </ul>
    </div>
  )
}

export default BreadContainer
