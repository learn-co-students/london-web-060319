import React from 'react'
import Calculator from './Calculator';
import { connect } from 'react-redux'
import Controls from './Controls';
import action_types from '../action_types';

class CalculatorContainer extends React.Component {

    render() {
        const { calculators, addCalc, removeCalc, multiplyCalcTotal, addCalcTotal, subtractCalcTotal, divideCalcTotal } = this.props

        return (
            <div className="calc-container">
                <Controls />
                {
                    calculators.map(calc =>
                        <Calculator
                            key={calc.id}
                            {...calc}
                            multiply={() => multiplyCalcTotal(calc.id)}
                            add={() => addCalcTotal(calc.id)}
                            subtract={() => subtractCalcTotal(calc.id)}
                            divide={() => divideCalcTotal(calc.id)}
                            removeCalc={() => removeCalc(calc.id)}
                        />
                    )
                }
                <div className="calculator">
                    <div className="total">{calculators.reduce((t, c) => t + c.total, 0)}</div>
                    <button onClick={addCalc}>+ Calc</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        calculators: state.calculators
    }
}

const mapDispatchToProps = dispatch => ({
    addCalc: () => dispatch({ type: action_types.ADD_CALC }),
    removeCalc: (calcId) => dispatch({ type: action_types.REMOVE_CALC, payload: { calcId } }),
    multiplyCalcTotal: (calcId) => dispatch({ type: action_types.MULTIPLY_CALC_TOTAL, payload: { calcId } }),
    addCalcTotal: (calcId) => dispatch({ type: action_types.ADD_CALC_TOTAL, payload: { calcId } }),
    subtractCalcTotal: (calcId) => dispatch({ type: action_types.SUBTRACT_CALC_TOTAL, payload: { calcId } }),
    divideCalcTotal: (calcId) => dispatch({ type: action_types.DIVIDE_CALC_TOTAL, payload: { calcId } })
})

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);