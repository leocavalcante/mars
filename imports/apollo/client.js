import ApolloClient from 'apollo-client'
import { meteorClientConfig } from 'meteor/apollo'

const client = new ApolloClient(meteorClientConfig())

export default client
