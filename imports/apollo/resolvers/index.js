import Messages from '/imports/meteor/collections/Messages'

const resolvers = {
  Query: {
    messages(root, args, context) {
      return Messages.find({}).fetch()
    }
  }
}

export default resolvers
