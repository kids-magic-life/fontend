import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'

export default () => {
  return {
    link: createUploadLink({ uri: 'http://localhost:9000/graphql' }),
    cache: new InMemoryCache(),
    defaultHttpLink: false
  }
}
