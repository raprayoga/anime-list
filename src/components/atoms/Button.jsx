/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { styling } from 'constants'

export default function Button(props) {
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
    &:hover {
      background-color: ${styling.COLOR.THIRD};
      color: black;
    }
  `

  return (
    <button
      className={props.className}
      css={buttonStyle}
      onClick={props.onClick}
      type={props.type}
      >
      {props.text}
    </button>
  )
}
