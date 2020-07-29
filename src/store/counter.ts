// Action Type
const RESET = 'counter/RESET' as const
const INCREASE = 'counter/INCREASE' as const
const DECREASE = 'counter/DECREASE' as const

// Action Creator
export const reset = (payload: number) => ({
  type: RESET,
  payload,
})

export const increase = () => ({
  type: INCREASE,
})

export const decrease = () => ({
  type: DECREASE,
})

interface AppState {
  number: number
}
// initialState
const initialState: AppState = {
  number: 0,
}

type Actions = ReturnType<typeof reset> | ReturnType<typeof increase> | ReturnType<typeof decrease>

// reducer
export default function counter(state: AppState = initialState, action: Actions): AppState {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        number: action.payload || initialState.number,
      }
    case INCREASE:
      return {
        ...state,
        number: state.number + 1,
      }
    case DECREASE:
      return {
        ...state,
        number: state.number - 1,
      }
    default:
      return state
  }
}
