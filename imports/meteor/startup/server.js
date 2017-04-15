import { createApolloServer } from 'meteor/apollo'
import schema from '/imports/apollo/schema'
import '../publications'
import '../methods'

createApolloServer({ schema })
