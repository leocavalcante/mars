const typeDefs = `
  type Message {
    body: String
  }

  type Query {
    messages: [Message]
  }
`

export default typeDefs
