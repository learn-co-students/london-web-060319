import React from 'react'
import { connect } from 'react-redux'
import action_types from '../action_types';

const Controls = (props) => {

    const { adjustState } = props

    const stateKeys = [
        'multiplier',
        'adder',
        'subtracter',
        'divider'
    ]

    return (
        <div className="controls">
            {
                stateKeys.map(key => (
                    <div key={key} className="control">
                        <button onClick={() => adjustState(key, -1)}>-</button>
                        <span>{key}: {props[key]}</span>
                        <button onClick={() => adjustState(key, 1)}>+</button>
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        multiplier: state.multiplier,
        adder: state.adder,
        subtracter: state.subtracter,
        divider: state.divider
    }
}

const mapDispatchToProps = dispatch => ({
    adjustState: (key, increment) => dispatch({ type: action_types.ADJUST_STATE, payload: { key, increment } })
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls);