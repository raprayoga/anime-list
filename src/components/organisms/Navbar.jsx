/** @jsxImportSource @emotion/react */
import React from 'react'
import { Link } from "react-router-dom";

import { css } from '@emotion/react'
import { styling } from 'constants'

export default function Navbar() {
  const navbarStyle = css`
    height: 50px;
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 5px;
    ${styling.MQMAX[2]} {
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

  const linkStyle = css`
    & > a {
      margin-right: 15px;
      text-decoration: none;
      color: rgba(49,53,59,0.68);
    }
  `

  return (
    <div css={navbarStyle}>
      <div css={brandStyle}>
        <Link to="/">
          Anime List
        </Link>
      </div>
      <div css={linkStyle}>
        <Link to="/"> Home </Link>
        <Link to="/category"> Category </Link>
        <Link to="/search"> Search </Link>
        <Link to="/favorite"> Favorite </Link>
      </div>
    </div>
  )
}
