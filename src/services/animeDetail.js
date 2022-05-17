import { gql, useQuery } from "./xhr"

export default function GetAnimeDetail(props) {
  const GET_ANIME_DETAIL = gql`
    query GetAnimeDetail ($id: Int) {
      Media (id: $id) {
        id
        title {
          romaji
        }
        status
        coverImage {
          extraLarge
        }
        meanScore
        genres
        startDate {
          year
        }
        season
        episodes
        description
      }
    }
  `
  
  const { loading, error, data, refetch, networkStatus } = useQuery(GET_ANIME_DETAIL, {
    variables: {
      id: props.id
    },
    notifyOnNetworkStatusChange: true
  });

  return { loading, error, data, refetch, networkStatus }
}