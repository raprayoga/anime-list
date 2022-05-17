/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Card from 'components/atoms/Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ImageAnime(props) {
  const cardCoverStyle = css`
    display: flex;
    justify-content: center;
    height: 200px;
    width: 100%;
  `

  const imageCardStyle = css`
    border-radius: 8px 8px 0px 0px;
    width: 100%;
  `
  return (
    <div css={cardCoverStyle}>
      <img src={props.data.coverImage.large} alt={`image ${props.data.title.romaji}`} css={imageCardStyle} />
    </div>
  )
}

function CaptionAnime(props) {
  const cardContentStyle = css`
    display: flex;
    flex: 1;
    width: 90%;
    vertical-align: middle;
    padding: 0px 8px;
    flex-direction: column;
    align-items: start;
    font-size: 0.86rem;
    color: #212121;
    & > p {
      margin: 0 0 0.4rem 0;
    }
  `

  const titleStyle = css`
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 0.4rem !important;
  `

  const genresStyle = css`
    font-size: 0.74rem;
  `

  const scoreToFLoat = props.data.meanScore/10
  const genresToString = props.data.genres.join(', ')

  return (
    <div css={cardContentStyle}>
      <p css={titleStyle}>{ props.data.title.romaji }</p>
      <p><FontAwesomeIcon icon={faStar} size='sm' color={'#ffc400'}/> {scoreToFLoat}</p>
      <p css={genresStyle}>{genresToString}</p>
      <p>{props.data.startDate.year}</p>
    </div>
  )
}

export default function AnimeCard(props) {
  return (
    <Card 
      cardCover={<ImageAnime data={props.dataAnime} />}
      cardContent={<CaptionAnime data={props.dataAnime} />}
      css={props.cssOverride}
    />
  )
}
