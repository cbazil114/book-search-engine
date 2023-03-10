import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            bookCount
            email
            savedBooks {
              _id
              authors
              description
              bookId
              image
              link
              title
            }
            username
          }
    }
`