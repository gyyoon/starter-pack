import { createStore, combineReducers, compose } from 'redux'
import counter, { AppState as counterState } from './counter'
import catList, { AppState as catListState } from './catList'

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
}
declare let window: ExtendedWindow

const rootReducer = combineReducers({
  counter,
  catList,
})

const composeEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(rootReducer, composeEnhancers())

export default store

export type catListStateType = catListState
export type counterStateType = counterState
