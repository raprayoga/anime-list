/** @jsxImportSource @emotion/react */
import React from 'react'
import { Link } from "react-router-dom";

import { css } from '@emotion/react'
import { styling } from 'constants'


export default function Header() {

  const navbarStyle = css`
    height: 40px;
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 5px;
    ${styling.MQMIN[2]} {
      display: none;
    }
  `

  const brandStyle = css`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    & > a {
      text-decoration: none;
      color: ${styling.COLOR.PRIMER};
    }
  `

  return (
    <div css={navbarStyle}>
      <div css={brandStyle}>
        <Link to="/">
          Anime List
        </Link>
      </div>
    </div>
  )
}
