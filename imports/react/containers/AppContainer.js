import React from 'react'
import App from '../components/App'
import { connect } from 'react-redux'
import { queryMessages } from '/imports/redux/actions/query-messages'
import { addMessage } from '/imports/redux/actions/add-message'

const props = state => ({
  label: state.label,
  messages: state.messages,
})

const actions = dispatch => ({
  onSubmit: event => {
    event.preventDefault()
    const body = event.currentTarget.body.value.trim()
    dispatch(addMessage(body))
  }
})

export default connect(props, actions)(App)
