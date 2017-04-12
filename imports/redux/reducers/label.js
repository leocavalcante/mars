import { SET_LABEL } from '../actions/set-label'

export default function label (state = 'Click me', action) {
  switch (action.type) {
    case SET_LABEL:
      return action.payload
    default:
      return state
  }
}
