import { gql } from "@apollo/client";

export const LIKE_CARD = gql`
mutation Mutation($likeItemId: ID!) {
  likeItem(id: $likeItemId) {
    status
  }
}
`