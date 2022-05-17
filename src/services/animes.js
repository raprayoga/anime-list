import { gql, useQuery } from "./xhr"

export default function GetAnime(props) {
  const GET_ANIME = gql`
    query GetAnime ($id: Int, $page: Int, $perPage: Int, $search: String, $genre: String) {
      Page (page: $page, perPage: $perPage) {
        media (id: $id, search: $search, genre: $genre) {
          id
          title {
            romaji
          }
          coverImage {
            large
          }
          meanScore
          genres
          startDate {
            year
          }
        }
      }
    }
  `
  
  const { loading, error, data, refetch, networkStatus } = useQuery(GET_ANIME, {
    variables: { 
      page: props.page || 1,
      perPage: props.perPage,
      status: props.status || null,
      genre: props.genre || null
    },
    notifyOnNetworkStatusChange: true
  });

  return { loading, error, data, refetch, networkStatus }
}