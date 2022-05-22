/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import Button from 'components/atoms/Button'
import InputForm from 'components/atoms/InputForm'
import { addCollectionAlbum } from 'stores/ManageCollection'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { styling } from 'constants'
import { css } from '@emotion/react'

function HeaderModal(props) {
  const backStyle = css`
    float: left;
    margin-right: 30px;
    padding-top: auto;
    margin-top: 8px;
    padding: auto;
  `

  return (
    <>
      <FontAwesomeIcon icon={faArrowLeft} color={'#a5a6a8'} size={'xl'} css={backStyle} onClick={props.hideAddNewCollect}/>
      <h4 css={css`margin: 0.8rem 0;`}>Add new Collection</h4>
      <hr />
    </>
  )
}

function BodyModal(props) {
  const [inputNewCollect, setInputNewCollect] = useState('')

  const submitForm = async () => {
    const resp = await addCollectionAlbum(inputNewCollect)
    if (resp.exist) return console.log('EXIST')
    props.updateData(resp.data);
    props.hideAddNewCollect();
  }

  const handleSubmit = async (event) => {
    submitForm()
    event.preventDefault();
  }

  const handleInputChange = event => {
    const value = event.target.value;
    setInputNewCollect(value)
  }


  const formStyle = css`
    ${styling.MQMIN[2]} {
      display: flex;
      flex-direction: row;
      margin-right: 5px;
      max-width: 80%;
      margin: auto;
    }
  `

  const saveButtonStyle = css`
    width: 100%;
    height: 35px;
    cursor: pointer;
    ${styling.MQMIN[2]} {
      width: 50%;
    }
  `

  const inputStyle = css`
    margin-bottom: 5px;
  `

  return (
    <form onSubmit={handleSubmit} css={formStyle}>
      <InputForm 
        type="text"
        value={inputNewCollect}
        onChange={handleInputChange}
        placeholder="Enter New Collection Album"
        css={inputStyle}
      />
      <Button
        css={saveButtonStyle}
        type='submit'
        text="Save"
      />
    </form>
  )
}

export default function AddNewCollecModal(props) {
  const hideAddNewCollect = () => {
    props.hideAddNewCollect();
  }

  const updateData = (data) => {
    props.updateData(data);
  }


  return {
    header: <HeaderModal hideAddNewCollect={() => hideAddNewCollect()} />,
    content: <BodyModal hideAddNewCollect={() => hideAddNewCollect()} updateData={(e) => updateData(e)} />
  }
}
