import { Meteor } from 'meteor/meteor'
import Messages from '/imports/meteor/collections/Messages'

export const ADD_MESSAGE = 'ADD_MESSAGE'

Meteor.methods({
  [ADD_MESSAGE]({ body }) {
    Messages.insert({body})
  }
})
