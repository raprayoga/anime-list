import { gql, useQuery } from "./xhr"

export default function GetAnimeRecomendation(props) {
  const GET_ANIME_RECOMEND = gql`
    query GetAnimeRecomendation ($id: Int, $page: Int, $perPage: Int ) {
      Page (page: $page, perPage: $perPage) {
        recommendations (id: $id) {
          media {
            id
            title {
              romaji
            }
            bannerImage
          }
        }
      }
    }
  `
  
  const { loading, error, data, refetch, networkStatus } = useQuery(GET_ANIME_RECOMEND, {
    variables: { 
      page: 1,
      perPage: props.perPage,
    },
    notifyOnNetworkStatusChange: true
  });

  return { loading, error, data, refetch, networkStatus }
}