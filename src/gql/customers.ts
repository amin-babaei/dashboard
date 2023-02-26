import {gql} from '@apollo/client'

const GET_CHARACTERS = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        gender
        image
      }
    }
  }
`
export default GET_CHARACTERS
