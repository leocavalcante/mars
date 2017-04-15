import Messages from '../collections/Messages'

Meteor.publish('messages', () => Messages.find())
