/** @jsxImportSource @emotion/react */
import React from 'react'
import Button from 'components/atoms/Button'
  
import { css } from '@emotion/react'
import { styling } from 'constants'

export default function CollectionList(props) {
  const chooseCollection = (name) => {
    props.chooseCollect(name)
  }

  const buttonStyle = css`
    height: 30px;
    width: 100%;
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 6px 0px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${styling.COLOR.SECOND};
    border: none;
    color: white;
    ${styling.MQMIN[2]} {
      margin: 8px 0;
    }
  `

  const wraper = css`
    display: grid;
    grid-template-columns: auto auto;
    padding: 0 8px;
    gap: 10px;
    width: 100%;
    ${styling.MQMIN[2]} {
      display: block;
      width: 30%;
    }
  `

  return (
    <div css={wraper}>
      {Object.keys(props.data).map((key, index)=> (
        <Button
          text={key}
          key={index}
          onClick={() => chooseCollection(key)}
          css={buttonStyle}
        />
        ))
      }
    </div>
  )
}
