import { combineReducers } from 'redux'
import label from './label'
import messages from './messages'

const rootReducer = combineReducers({
  label,
  messages,
})

export default rootReducer
