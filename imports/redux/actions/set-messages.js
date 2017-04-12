export const SET_MESSAGES = 'SET_MESSAGES'

export function setMessages (messages) {
  return {
    type: SET_MESSAGES,
    payload: messages,
  }
}
