import { gql } from "apollo-boost";

const ALL_VIDEO_QUERY = gql`
  {
    videos {
      key
      title
      created_at
      preview_image
      view_count
      owner {
        name
        avatar
      }
    }
  }
`;

export default ALL_VIDEO_QUERY;