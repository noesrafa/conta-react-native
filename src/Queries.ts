import {gql} from '@apollo/client';
export const populars = gql`
  {
    populars {
      title
      subtitle
      image {
        url
      }
    }
  }
`;