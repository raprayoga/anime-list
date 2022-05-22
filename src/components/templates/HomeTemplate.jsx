/** @jsxImportSource @emotion/react */
import React from 'react'
import BannerSlider from 'components/organisms/BannerSlider'
import AnimeListSlider from 'components/organisms/AnimeListSlider'
import { css } from '@emotion/react'
import { styling } from 'constants'

export default function HomeTemplate() {
  const container = css`
    margin: auto;
    width: 100%;
    max-width: 960px;
    ${styling.MQMIN[4]} {
      max-width: 1280px;
    }
  `

  return (
    <div css={container}>
      <div css={css`margin-bottom: 50px`}>
        <BannerSlider category={'Comedy'}/>
      </div>
      <div css={css`margin-bottom: 50px`}>
        <AnimeListSlider category={'Action'} />
      </div>
      <div css={css`margin-bottom: 50px`}>
        <AnimeListSlider category={'Horror'} />
      </div>
      <div css={css`margin-bottom: 50px`}>
        <AnimeListSlider category={'Fantasy'} />
      </div>
      <div css={css`margin-bottom: 50px`}>
        <AnimeListSlider category={'Sports'} />
      </div>
    </div>
  )
}
