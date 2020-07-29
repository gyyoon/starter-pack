import { createStore, combineReducers, compose } from 'redux'
import counter from './counter'
import list from './list'

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
}
declare let window: ExtendedWindow

const rootReducer = combineReducers({
  counter,
  list,
})

const composeEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(rootReducer, composeEnhancers())

export default store
