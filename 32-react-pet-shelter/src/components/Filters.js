import React from 'react'

class Filters extends React.Component {
  render() {
    const { options, value, handleFilter, performSearch } = this.props
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={event => handleFilter(event.target.value)}>
            {
              options.map(option => <option selected={option.value === value} key={option.value} value={option.value}>{option.key}</option>)
            }
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={performSearch}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
