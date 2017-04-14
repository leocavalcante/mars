import { SET_MESSAGES } from '../actions/set-messages'
import { QUERY_MESSAGES } from '../actions/query-messages'

export default function messages (state = [], action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload

    default:
      return state
  }
}
