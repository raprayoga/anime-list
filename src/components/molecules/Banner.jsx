/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

export default function Banner(props) {
  const imageCardStyle = css`
    width: 100%;
    height: auto;
  `

  return (
    <div>
      <img src={props.dataAnime.media.bannerImage} alt={`image ${props.dataAnime.media.title.romaji}`} css={imageCardStyle} />
    </div>
  )
}
