import React from 'react'
import App from '../components/App'
import { connect } from 'react-redux'
import { queryMessages } from '/imports/redux/actions/query-messages'

const props = state => ({
  label: state.label,
  messages: state.messages,
})

const actions = dispatch => ({
  onClick: event => dispatch(queryMessages())
})

export default connect(props, actions)(App)
