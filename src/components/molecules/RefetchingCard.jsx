/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Card from 'components/atoms/Card'
import { styling } from 'constants'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

function ImageAnime(props) {
  const cardCover = css`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 25%;
    align-items: center;
  `

  const buttonIcon = css`
    border-radius: 50%;
    padding: 10px;
    background-color: white;
    cursor: pointer;
  `

  const handleRefetch = () => {
    props.refetch();
  }

  return (
    <div css={cardCover}>
      <button
        css={buttonIcon}
        onClick={() => handleRefetch()}
      >
        <FontAwesomeIcon icon={faArrowRotateRight} size='2x'/>
      </button>
    </div>
  )
}

function CaptionAnime(props) {
  const cardContent = css`
    display: flex;
    flex: 1;
    width: 90%;
    padding: 8px;
    flex-direction: column;
    justify-content-item: center;
  `

  return (
    <div css={cardContent}>
      <h3>Gagal Memuat</h3>
      <p>Ketuk icon untuk memuat ulang</p>
    </div>
  )
}

export default function RefetchingCard(props) {
  const handleRefetch = () => {
    props.refetch();
  }

  return (
    <Card 
      cardCover={<ImageAnime refetch={() => handleRefetch()} />}
      cardContent={<CaptionAnime />}
      css={{
        flexDirection: 'row',
        width: '100%',
        height: '120px',
        [styling.MQMIN[4]]: {
          height: '120px',
          width: '100%',
        },
        [styling.MQMAX[1]]: {
          width: '100%'
        }
      }}
    />
  )
}
