/** @jsxImportSource @emotion/react */
import React from 'react'
import LikedButton from 'components/atoms/LikedButton'
import DetailAnime from 'components/organisms/DetailAnime'
import { css } from '@emotion/react'
import { styling } from 'constants'

export default function DetailTemplate() {
  const container = css`
    margin: auto;
    max-width: 800px;
  `

  return (
    <div css={container}>
      <DetailAnime />
      <LikedButton />
    </div>
  )
}
