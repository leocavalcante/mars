import { SET_LABEL } from '../actions/set-label'

export default function label (state = 'Query', action) {
  switch (action.type) {
    case SET_LABEL:
      return action.payload
    default:
      return state
  }
}
