/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import AnimeCard from "components/molecules/AnimeCard";
import GetAnime from 'services/animes'
import { styling } from 'constants'
import AnimeCardSkeleton from 'skeleton/AnimeCardSkeleton';
import RefetchingCard from 'components/molecules/RefetchingCard';
import { NetworkStatus } from '@apollo/client';
import { Link } from 'react-router-dom';

export default function AnimeCardList(props) {
  const { loading, error, data, refetch, networkStatus } = GetAnime({perPage: 10, genre: props.category, page: props.page, status: props.status});
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    if (data) {
      const tempList = [...animeList]
      const newList = tempList.concat(data.Page.media)
      setAnimeList([...newList])
    }
  }, [data]);

  useEffect(() => {
    props.checkLoading(loading);
  }, [loading]);

  const skeleton = Array(16).fill(null);
  const cardWrapStyle = css`
    padding: 8px;
    ${styling.MQMIN[2]} {
      padding: 0;
    }
    & > a {
      text-decoration: none;
    }
  `

  const cardContainerStyle = css`
    justify-content: space-around;
    display: grid;
    grid-template-columns: auto auto;
    ${styling.MQMIN[2]} {
      grid-template-columns: auto auto auto;
      gap: 10px;
      padding: 0 8px;
    }
    ${styling.MQMIN[3]} {
      grid-template-columns: auto auto auto auto;
    }
    ${styling.MQMIN[4]} {
      grid-template-columns: auto auto auto auto auto;
    }
  `

  return (
    <div css={cardContainerStyle}>
      {animeList.map((data)=> (
        <div css={cardWrapStyle} key={data.id}>
          <Link to={`/detail/${data.id}`}>
            <AnimeCard
              dataAnime={data}
            />
          </Link>
        </div>
      ))}
      {loading || networkStatus === NetworkStatus.refetch ? (skeleton.map((value, index)=> (
        <div css={cardWrapStyle} key={index}>
          <AnimeCardSkeleton />
        </div>
      ))
      ) : error && (
        <RefetchingCard  refetch={() => refetch()} />
      )}
    </div>
  )
}
