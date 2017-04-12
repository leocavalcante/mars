import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import AppContainer from '/imports/react/containers/AppContainer'

export default (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)
