import { gql } from "@apollo/client";

export const DISLIKE_CARD = gql`
mutation Mutation($dislikeItemId: ID!) {
  dislikeItem(id: $dislikeItemId) {
    isActive
  }
}
`