import { Meteor } from 'meteor/meteor'
import React from 'react'
import { render } from 'react-dom'
import provider from '/imports/redux/provider'
import client from '/imports/apollo/client'
import messagesQuery from '/imports/apollo/queries/messages'
import { Tracker } from 'meteor/tracker'
import store from '/imports/redux/store'
import { setMessages }  from '/imports/redux/actions/set-messages'
import Messages from '/imports/meteor/collections/Messages'

Tracker.autorun(() => {
  const messagesHandle = Meteor.subscribe('messages')
  const messages = Messages.find().fetch()

  store.dispatch(setMessages(messages))
})

Meteor.startup(() => render(provider, document.getElementById('root')))
