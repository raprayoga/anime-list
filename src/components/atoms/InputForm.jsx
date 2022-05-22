/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { styling } from 'constants'

export default function InputForm(props) {
  const inputStyle = css`
    width: 100%;
    height: 30px;
    border-radius: 8px;
    border-color: ${styling.FONTCOLOR.SECONDARY};
    &:focus {
      border-color: ${styling.COLOR.SECOND};
    }
  `

  return (
    <input
      className={props.className}
      css={inputStyle}
      onChange={props.onChange}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
    />
  )
}
