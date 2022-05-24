/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import AnimeCard from "components/molecules/AnimeCard";
import { styling } from 'constants'
import { Link } from 'react-router-dom';
import emptyIllustartion from 'assets/image/emptyIllustartion.png'

export default function AnimFavoriteList(props) {

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
      width: 70%
    }
    ${styling.MQMIN[3]} {
      grid-template-columns: auto auto auto auto;
    }
    ${styling.MQMIN[4]} {
      grid-template-columns: auto auto auto auto auto;
    }
  `

  const imageCardStyle = css`
    width: 100%;
  `

  return (
    <div css={cardContainerStyle}>
      {Object.keys(props.data).length > 0 ?    
      Object.keys(props.data).map((key) => (
        <div css={cardWrapStyle} key={props.data[key].Media.id}>
          <Link to={`/detail/${props.data[key].Media.id}`}>
            <AnimeCard
              dataAnime={props.data[key].Media}
            />
          </Link>
        </div>
      )
      ) : props.collectionChoosed &&
        <img src={emptyIllustartion} alt={`image onload`} css={imageCardStyle} />
    }
    </div>
  )
}
