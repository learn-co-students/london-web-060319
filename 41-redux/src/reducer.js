import action_types from "./action_types";

const randomStartingTotal = () => Math.floor(Math.random() * 9) + 1

let id = 0
const emptyCalc = () => {
    return {
        id: ++id,
        total: randomStartingTotal()
    }
}

// this is used as the default value in the reducer function definition
const defaultState = {
    calculators: [
        { ...emptyCalc() }
    ],
    multiplier: 2,
    adder: 1,
    subtracter: 1,
    divider: 2
}

// reducer needs both the old info from your state (state) and any new, incoming information (action)
function reducer(state = defaultState, action) {
    // Whatever is returned by the reducer BECOMES your new state. Typically we'll return an object
    // You _probably_ want to always return an object containing all of the current state,
    // so you'll see ...state a lot

    // console.log("STATE: ", state)
    // console.log("ACTION: ", action)

    // switch statement looking at the type of action
    // we're importing all the available types from action_types.js
    switch (action.type) {
        case action_types.ADD_CALC:
            return { ...state, calculators: [...state.calculators, { ...emptyCalc() }] }
        case action_types.MULTIPLY_CALC_TOTAL:
            return {
                ...state,
                calculators: state.calculators.map(calc => {
                    if (calc.id !== action.payload.calcId) return calc;

                    calc.total *= state.multiplier
                    return { ...calc }
                })
            }
        case action_types.REMOVE_CALC:
            return {
                ...state,
                calculators: state.calculators.filter(calc => calc.id !== action.payload.calcId)
            }
        case action_types.ADD_CALC_TOTAL:
            return {
                ...state,
                calculators: state.calculators.map(calc => {
                    if (calc.id !== action.payload.calcId) return calc;

                    calc.total += state.adder
                    return { ...calc }
                })
            }
        case action_types.SUBTRACT_CALC_TOTAL:
            return {
                ...state,
                calculators: state.calculators.map(calc => {
                    if (calc.id !== action.payload.calcId) return calc;

                    calc.total -= state.subtracter
                    return { ...calc }
                })
            }
        case action_types.DIVIDE_CALC_TOTAL:
            return {
                ...state,
                calculators: state.calculators.map(calc => {
                    if (calc.id !== action.payload.calcId) return calc;

                    calc.total /= state.divider
                    return { ...calc }
                })
            }
        case action_types.ADJUST_STATE:
            return {
                ...state,
                [action.payload.key]: state[action.payload.key] + action.payload.increment
            }
        default:
            return state
    }
}

export default reducer
