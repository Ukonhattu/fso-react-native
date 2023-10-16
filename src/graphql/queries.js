import {gql} from '@apollo/client';

export const GET_REPOSITORIES = gql`

query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
    edges {
      node {
        id
        fullName
        ownerAvatarUrl
        description
        language
        forksCount
        stargazersCount
        reviewCount
        ratingAverage
      }
    }
  }
}
`;


export const GET_ONE_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const ME = gql`
query Me($includeReviews: Boolean = false) {
  me {
    id
    username
    reviews @include(if: $includeReviews) {
      edges {
        node {
          id
          repository {
            id
            fullName
          }
          rating
          createdAt
          text
          user {
            username
          }
        }
      }
    }
  }
}
`;