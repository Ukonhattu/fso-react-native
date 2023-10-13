import {gql} from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repositories {
  repositories {
    edges {
      node {
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

export const ME = gql`
query Me {
  me {
    id
    username
  }
}
`;