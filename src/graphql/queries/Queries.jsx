import { gql} from "@apollo/client";

export const GET_CARDS = gql`
query Query($orderBy: SellItemOrderByInput!, $first: Int) {
  sellItems(orderBy: $orderBy, first: $first) {
    edges {
      node {
        id
        item {
          id
          previewImage
          title
          likeCount
          likedByUserIds
        }
      }
    }
  }
}
`
