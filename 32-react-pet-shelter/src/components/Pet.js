import React from 'react'

const CardButton = (props) => props.isAdopted ? 
  <button className="ui disabled button">Already adopted</button> : 
  <button className="ui primary button" onClick={props.adoptPet}>Adopt pet</button>

class Pet extends React.Component {
  render() {
    const { gender, name, age, type, weight, isAdopted, adoptPet } = this.props
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'female' ? '♀' : '♂'}
            {name}
          </a>
          <div className="meta">
        <span className="date">{type}</span>
          </div>
          <div  className="description">
        <p>Age: {age}</p>
        <p>Weight: {weight}kg</p>
          </div>
        </div> 
        <div  className="extra content">
        <CardButton adoptPet={adoptPet} isAdopted={isAdopted} />
        </div>
      </div> 
    )
  }
}
 
export default Pet
