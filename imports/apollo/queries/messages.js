import { gql } from 'react-apollo'

export default gql`
  query {
    messages {
      body
    }
  }
`
