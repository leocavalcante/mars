import { createStore, compose } from 'redux'
import rootReducer from './reducers'
import { applyMiddleware } from 'redux'

const middlewares = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
]

const store = createStore(rootReducer, {}, compose(...middlewares))

export default store
