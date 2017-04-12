import React from 'react'
import App from '../components/App'
import { connect } from 'react-redux'

const props = state => ({
  label: state.label,
  messages: state.messages,
})

const actions = dispatch => ({
  onClick: event => dispatch({
    type: 'SET_LABEL',
    payload: event.timeStamp.toString(),
  })
})

export default connect(props, actions)(App)
