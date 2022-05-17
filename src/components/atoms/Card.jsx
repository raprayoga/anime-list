/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { styling } from 'constants'

export default function Card(props) {
  const cardStyle = css`
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

  return (
    <div
      className={props.className}
      css={cardStyle}>
      {props.cardCover}
      {props.cardContent}
    </div>
  )
}
