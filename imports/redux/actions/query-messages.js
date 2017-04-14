import apolloClient from '/imports/apollo/client'
import messagesQuery from '/imports/apollo/queries/messages'
import { setMessages } from './set-messages'

export const QUERY_MESSAGES = 'QUERY_MESSAGES'

export function queryMessages () {
  return dispatch => {
    apolloClient
      .query({query: messagesQuery})
      .then(res => dispatch(setMessages(res.data.messages)))
  }
}
