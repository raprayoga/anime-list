/** @jsxImportSource @emotion/react */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { css } from '@emotion/react';
import Button from 'components/atoms/Button';

export default function LikedButton(props) {
  const likeStyle = css`
    font-size: 18px;
    position: fixed;
    bottom: 16px;
    right: 16px;
    border: 0;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    cursor: pointer;
    z-index: 1;
  `

  return (
    <Button
      className={props.className}
      aria-label="like this anime"
      css={likeStyle}
      onClick={props.onClick}
      text={<FontAwesomeIcon icon={faHeartCircleMinus} aria-hidden="true" />}
    />
  )
}
