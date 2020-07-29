// Action Type
const SET_LIST = 'list/SET_LIST' as const
const UPDATE_LIST = 'list/UPDATE_LIST' as const

interface IPayload {
  breeds: Array<string>
  categories?: Array<{ id: number; name: string }>
  height: number
  id: string
  url: string
  width: number
}

// Action Creator
export const setList = (payload: IPayload[]) => ({
  type: SET_LIST,
  payload,
})

export const updateList = (payload: IPayload[]) => ({
  type: UPDATE_LIST,
  payload,
})

interface AppState {
  items: null | IPayload[]
}
// initialState
const initialState: AppState = {
  items: null,
}

// reducer
type Actions = ReturnType<typeof setList> | ReturnType<typeof updateList>
export default function counter(state: AppState = initialState, action: Actions): AppState {
  switch (action.type) {
    case SET_LIST:
      return {
        items: action.payload,
      }
    case UPDATE_LIST:
      return {
        items: action.payload,
      }
    default:
      return state
  }
}
