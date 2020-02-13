import { gql } from "apollo-boost";

const ALL_USER_QUERY = gql`
  {
    users {
      id
      name
    }
  }
`;

export default ALL_USER_QUERY;