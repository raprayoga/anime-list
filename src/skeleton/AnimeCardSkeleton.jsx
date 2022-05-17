/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { styling } from 'constants'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function AnimeCardSkeleton() {
  const card = css`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px 0px;
    height: 340px;
    width: 191px;
    margin-bottom: 4px;
    ${styling.MQMIN[4]} {
      height: 361px;
      width: 204px;
    }
    ${styling.MQMAX[1]} {
      width: 100%;
    }
  `
  const cardCover = css`
    justify-content: center;
    height: 200px;
    width: 100%;
  `

  const cardContent = css`
    width: 90%;
    vertical-align: middle;
    padding: 8px
  `

  return (
    <div css={card}>
      <div css={cardCover}>
        <Skeleton count={1} height={'100%'} style={{borderRadius: '8px 8px 0px 0px', width: '100%'}}/>
      </div>

      <div css={cardContent}>
        <Skeleton count={2} width={'100%'}/>
        <Skeleton count={1} width={'30%'}/>
      </div>
    </div>
  )
}
