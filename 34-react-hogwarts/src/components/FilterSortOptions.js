import React from 'react'


const FilterSortOptions = ({ setFilterType, setSortType, sortOptions, filterOptions, filterType, sortType }) => {
    return (
        <div>
            <select onChange={e => setFilterType(e.target.value)}>
                {
                    filterOptions.map(option => <option selected={filterType === option} key={option} value={option}>{option}</option>)
                }
            </select>
            <select onChange={e => setSortType(e.target.value)}>
                {
                    sortOptions.map(option => <option selected={sortType === option} key={option} value={option}>{option}</option>)
                }
            </select>
        </div>
    )
}

export default FilterSortOptions