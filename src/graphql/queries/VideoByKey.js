import { gql } from "apollo-boost";

function VIDEO_BY_KEY_QUERY(key) {
  return gql`
  {
    videoByKey(key: "${key}") {
      key
      title
      created_at
      preview_image
      view_count
      description
      owner {
        name
        avatar
      }
    }
  }
`;
}

export default VIDEO_BY_KEY_QUERY;