/** @jsxImportSource @emotion/react */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { css } from '@emotion/react';

export default function LikedButton(props) {
  const likeStyle = css`
    font-size: 18px;
    position: fixed;
    bottom: 16px;
    right: 16px;
    background-color: #db0000;
    color: white;
    border: 0;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
  `

  return (
    <button
      className={props.className}
      aria-label="like this anime"
      css={likeStyle}
      onClick={props.onClick}
    >
      <FontAwesomeIcon icon={faHeart} aria-hidden="true" />
    </button>
  )
}
