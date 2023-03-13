import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            bookCount
            email
            username
            savedBooks {
              bookId
              authors
              description
              bookId
              image
              link
              title
            }
          }
    }
`