/** @jsxImportSource @emotion/react */
import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { css, keyframes } from '@emotion/react';
import { styling } from 'constants'

const Modal = forwardRef((props, ref) => {
  const [displayModal, setDisplayModal] = useState('none')

  const slideIn = keyframes`
    from {bottom: -300px; opacity: 0}
    to {bottom: 0; opacity: 1}
  `

  const fadeIn = keyframes`
    from {opacity: 0} 
    to {opacity: 1}
  `

  const modalStyle = css`
    display: ${displayModal};
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto;  
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);
    animation-name: ${fadeIn};
    animation-duration: 0.4s
  `

  const modalHeaderStyle = css`
    padding: 2px 16px;
  `

  const modalContentStyle = css`
    position: fixed;
    bottom: 0;
    background-color: #fefefe;
    width: 100%;
    height: 40%;
    border-radius: 2%;
    animation-name: ${slideIn};
    animation-duration: 0.4s;
    ${styling.MQMIN[2]} {
      height: 145px;
    }
  `

  const closeStyle = css`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  `

  const modalBodyStyle = css`
    padding: 2px 16px;
    margin: auto;
  `

  const modalFooterStyle = css`
    padding: 2px 16px;
  `

  const closeModal = (e) => {
    setDisplayModal('none')
  }

  const handleStopPropagationClose = (e) => {
    e.stopPropagation()
  }

  useImperativeHandle(ref, () => ({

    showModal() {
      setDisplayModal('block')
    }

  }));

  return (
    <div
      className={props.className}
      css={modalStyle}
      onClick={() => closeModal()}
    >

      <div
        css={modalContentStyle}
        onClick={(e) => handleStopPropagationClose(e)}
      >
        <div css={modalHeaderStyle}>
          <span css={closeStyle} onClick={() => closeModal()}>&times;</span>
          {props.header}
        </div>

        <div css={modalBodyStyle}>
          {props.content}
        </div>
        <div css={modalFooterStyle}>
          {props.footer}
        </div>

      </div>

    </div>
  )
})

export default Modal