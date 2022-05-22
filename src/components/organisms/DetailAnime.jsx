/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import GetAnimeDetail from 'services/animeDetail'
import { NetworkStatus } from '@apollo/client';
import RefetchingCard from 'components/molecules/RefetchingCard';
import AnimeDetailSkeleton from 'skeleton/AnimeDetailSkeleton';
import { css } from '@emotion/react';
import { styling } from 'constants'

function AnimeImage(props) {
  const animeImageStyle = css`
    width: 70%;
    ${styling.MQMAX[1]} {
      width: 100%;
    }
  `

  return (
    <>
      <img src={props.imageSrc} alt={`image ${props.title}`} css={animeImageStyle} />
    </>
  )
}

function AnimeDescription(props) {
  return (
    <div>
      <h4>Description</h4>
      <p>{props.description}</p>
    </div>
  )
}

function AnimeKeterangan(props) {
  const scoreToFLoat = props.data.meanScore/10
  const genresToString = props.data.genres.join(', ')

  return (
    <div css={css`margin-left: 20px;`}>
      <h3>Information</h3>
      <h4>Genre</h4>
      <p>{genresToString}</p>
      <h4>Start Date</h4>
      <p>{props.data.startDate.year}</p>
      <h4>Rating</h4>
      <p>{scoreToFLoat}</p>
      <h4>Season</h4>
      <p>{props.data.season}</p>
      <h4>Episodes</h4>
      <p>{props.data.episodes}</p>
      <h4>Status</h4>
      <p>{props.data.status}</p>
    </div>
  )
}


export default function DetailAnime(props) {
  let { id } = useParams();
  const { loading, error, data, refetch, networkStatus } = GetAnimeDetail({id: id});

  useEffect(() => {
    props.passAnimedata(data)
  }, [data]);

  const detailStyle = css`
    margin: 0 auto;
    width: 98%;
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px 16px;
  `

  const imageWrapStyle = css`
    display: flex;
    ${styling.MQMAX[1]} {
      flex-direction: column;
    }
  `

  return (
    <>
      {loading || networkStatus === NetworkStatus.refetch ? (
        <AnimeDetailSkeleton />
      ) : error ? (
        <RefetchingCard  refetch={() => refetch()} />
      ) : (
        <div css={detailStyle}>
          <h2>{data.Media.title.romaji}</h2>
          <div css={imageWrapStyle}>
            <AnimeImage 
              title={data.Media.title.romaji}
              imageSrc={data.Media.coverImage.extraLarge}
            />
            <AnimeKeterangan data={data.Media} />
          </div>
          <AnimeDescription description={data.Media.description}/>
        </div>
      )}
    </>
  )
}
