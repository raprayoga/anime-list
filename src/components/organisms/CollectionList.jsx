/** @jsxImportSource @emotion/react */
import React from 'react'
import Button from 'components/atoms/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { css } from '@emotion/react'
import { styling } from 'constants'



export default function CollectionList(props) {
  const chooseCollection = (name) => {
    props.chooseCollect(name)
  }
  
  const RemoveButton = (name) => {
    const removeCollect = (e)=> {
      props.removeCollect(name)
      e.stopPropagation()
    }
  
    const removeStyle = css`
      background-color: red;
      width: 25px;
      height: 25px;
      z-index: 5;
      position: absolute;
      top: -5px;
      right: -5px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    `
  
    return (
      <div css={removeStyle} onClick={(e) => removeCollect(e)}>
        <FontAwesomeIcon icon={faTrashCan} size='sm' color={'#ffc400'}/> 
      </div>
    )
  }

  const buttonStyle = css`
    position: relative;
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
    cursor: pointer;
    ${styling.MQMIN[2]} {
      margin: 8px 0;
    }
  `

  const wraper = css`
    display: grid;
    grid-template-columns: auto auto;
    padding: 0 10px;
    gap: 20px;
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
          child={<RemoveButton name={key} />}
        />
        ))
      }
    </div>
  )
}
