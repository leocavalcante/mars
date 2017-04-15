import { Meteor } from 'meteor/meteor'
import { ADD_MESSAGE as METEOR_ADD_MESSAGE } from '/imports/meteor/methods/add-message'

export const ADD_MESSAGE = 'ADD_MESSAGE'

export function addMessage (body) {
  return () => {
    Meteor.call(METEOR_ADD_MESSAGE, {body})
  }
}
