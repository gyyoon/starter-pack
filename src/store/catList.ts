// Action Type
const SET_LIST = 'catList/SET_LIST' as const
const UPDATE_LIST = 'catList/UPDATE_LIST' as const

interface IPayload {
  breeds: Array<string>
  categories?: Array<{ id: number; name: string }>
  height: number
  id: string
  url: string
  width: number
}

// Action Creator
export const setCatList = (payload: IPayload[]) => ({
  type: SET_LIST,
  payload,
})

export const updateCatList = (payload: IPayload[]) => ({
  type: UPDATE_LIST,
  payload,
})

export type AppState = { items: null | IPayload[] }
// initialState
const initialState: AppState = {
  items: null,
}

// reducer
type Actions = ReturnType<typeof setCatList> | ReturnType<typeof updateCatList>
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
