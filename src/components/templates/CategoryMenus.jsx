/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import CategoryList from 'components/organisms/CategoryList'
import { styling } from 'constants'

export default function CategoryMenus() {
  const wraper = css`
    display: grid;
    grid-template-columns: auto auto;
    padding: 0 8px;
    gap: 10px;
    ${styling.MQMIN[4]} {
      grid-template-columns: auto auto auto auto auto;
    }
    ${styling.MQMIN[3]} {
      grid-template-columns: auto auto auto auto;
    }
    ${styling.MQMIN[2]} {
      grid-template-columns: auto auto auto;
    }
  `

  return (
    <div css={wraper}>
      <CategoryList />
    </div>
  )
}
