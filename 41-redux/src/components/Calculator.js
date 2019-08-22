import React from 'react'

const Calculator = ({ total, multiply, divide, add, subtract, removeCalc }) => {
    return (
        <div className="calculator">
            <div className="total">
                {total}
            </div>
            <div className="controls">
                <button onClick={add}>Add</button>
            </div>
            <div className="controls">
                <button onClick={subtract}>Subtract</button>
            </div>
            <div className="controls">
                <button onClick={multiply}>Multiply</button>
            </div>
            <div className="controls">
                <button onClick={divide}>Divide</button>
            </div>
            <div className="controls remove">
                <button onClick={removeCalc}>Remove</button>
            </div>
        </div>
    )
}

export default Calculator