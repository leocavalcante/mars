export const SET_LABEL = 'SET_LABEL'

export function setLabel(label) {
  return {
    type: SET_LABEL,
    payload: label,
  }
}
