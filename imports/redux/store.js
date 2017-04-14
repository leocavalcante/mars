import { createStore, compose } from 'redux'
import rootReducer from './reducers'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const middlewares = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
]

const store = createStore(rootReducer, {}, compose(...middlewares))

export default store
