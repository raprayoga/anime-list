/** @jsxImportSource @emotion/react */
import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faHeart, faMagnifyingGlass, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";

import { css } from '@emotion/react'
import { styling } from 'constants'

export default function BottomNavigate() {
  const navigateStyle = css`
    position: fixed;
    bottom: 0px;
    padding: 8px 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #ffffff;
    box-shadow: rgb(108 114 124 / 16%) 0px -2px 4px 0px;
    z-index: 99;
    ${styling.MQMIN[2]} {
      display: none;
    }
    & > a {
      text-decoration: none;
    }
    & > a > div {
      display: flex;
      flex-direction: column;
    }
  `

  const navigateTextStyle = css`
    margin: 5px 0 0 0;
    color: ${styling.FONTCOLOR.SECONDARY}
  `
  
  return (
    <div css={navigateStyle}>
      <Link to="/">
        <div>
          <FontAwesomeIcon icon={faHouse} color={'#a5a6a8'}/>
          <p css={navigateTextStyle}>Home</p>
        </div>
      </Link>
      <Link to="/category">
        <div>
          <FontAwesomeIcon icon={faTableCellsLarge} color={'#a5a6a8'}/>
          <p css={navigateTextStyle}>Category</p>
        </div>
      </Link>
      <Link to="/search">
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} color={'#a5a6a8'}/>
          <p css={navigateTextStyle}>Search</p>
        </div>
      </Link>
      <Link to="/favorite">
        <div>
          <FontAwesomeIcon icon={faHeart} color={'#a5a6a8'}/>
          <p css={navigateTextStyle}>Favorite</p>
        </div>
      </Link>
    </div>
  )
}
