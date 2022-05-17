/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { styling } from 'constants'
import { Link } from 'react-router-dom'

export default function CategoryLink(props) {
  const buttonStyle = css`
    height: 50px;
    width: 100%;
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px 0px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${styling.COLOR.SECOND};
    border: none;
    color: white;
  `

  return (
    <Link to={`/category/${props.text}`} css={css`text-decoration: none;`}>
      <div css={buttonStyle}>
          {props.text}
      </div>
    </Link>
  )
}
