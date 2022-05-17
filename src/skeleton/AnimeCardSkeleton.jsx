/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { styling } from 'constants'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Card from 'components/atoms/Card'

export default function AnimeCardSkeleton() {
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
    <Card 
      cardCover={
        <div css={cardCover}>
          <Skeleton count={1} height={'100%'} style={{borderRadius: '8px 8px 0px 0px', width: '100%'}}/>
        </div>
      }
      cardContent={
        <div css={cardContent}>
        <Skeleton count={2} width={'100%'}/>
        <Skeleton count={1} width={'30%'}/>
      </div>
      }
    />
  )
}
