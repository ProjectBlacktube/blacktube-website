import { gql } from "apollo-boost";

const ALL_VIDEO_QUERY = gql`
  {
    videos {
      key
      title
      description
    }
  }
`;

export default ALL_VIDEO_QUERY;