import { SET_MESSAGES } from '../actions/set-messages'

export default function messages (state = [], action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload

    default:
      return state
  }
}
