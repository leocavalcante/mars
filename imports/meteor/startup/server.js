import { createApolloServer } from 'meteor/apollo'
import schema from '/imports/apollo/schema'

createApolloServer({ schema })
