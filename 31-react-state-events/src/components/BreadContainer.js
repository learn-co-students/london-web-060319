import React from "react"
import Bread from "./Bread"

function BreadContainer(props) {
  console.log(props)
  const { breadList } = props
  return (
    <div>
      {props.toasted ? "toasted" : "not toasted"}
      <ul>
        {breadList.map(bread => {
          return <Bread bread={bread} key={bread} />
        })}
      </ul>
    </div>
  )
}

export default BreadContainer
