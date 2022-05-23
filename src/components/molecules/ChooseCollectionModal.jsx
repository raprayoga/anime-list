/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react'
import { CollectionsContext } from 'stores/context/CollectionsContext';
import { AnimeDetailContext } from 'stores/context/AnimeDetailContext';
import { likeAnime } from 'stores/ManageCollection';

import Button from 'components/atoms/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { styling } from 'constants'
import { css } from '@emotion/react'

function HeaderModal() {
  return (
    <>
      <h4 css={css`margin: 0.8rem 0;`}>Add to Collection</h4>
      <hr />
    </>
  )
}

function BodyModal(props) {
  const collections = useContext(CollectionsContext);
  const detailAnime = useContext(AnimeDetailContext);

  const handleLikeAnime = async (collectName) => {
    await likeAnime(collectName, detailAnime)
    props.likeAnime(collectName);
  }

  const ButtonAdd = () => {
    return (
      <>
        <FontAwesomeIcon icon={faPlus} aria-hidden="true" />  Add new Collection
      </>
    )
  }

  const addCollectionStyle = css`
    width: 100%;
    height: 35px;
    cursor: pointer;
  `

  const contentStyle = css`
    overflow: auto;
    white-space: nowrap;
    padding-bottom: 10px;
    & > button {
      ${styling.MQMIN[2]} {
        display: inline-block;
        margin-right: 5px;
        width: 300px;
      }
      cursor: pointer;
      margin-bottom: 5px;
      &:hover {
        background-color: white;
      }
    }
    ${styling.MQMAX[2]} {
      height: 25vh;
    }
  `

  const collectionStyle = css`
    height: 35px;
    border: 1px solid #9d9d9d;
    color: black;
    background-color: #f1f1f1;
  `

  return (
    <div css={contentStyle}>
      {Object.keys(collections).map((collectionName, index) => (
        <Button
          key={index}
          css={collectionStyle}
          onClick={() => handleLikeAnime(collectionName)}
          text={collectionName}
        />
    ))}

      <Button
        css={addCollectionStyle}
        onClick={props.showAddNewCollect}
        text={<ButtonAdd />}
      />
    </div>
  )
}

export default function ChooseCollection(props) {
  const showAddNewCollect = () => {
    props.showAddNewCollect();
  }

  const likeAnime = (data) => {
    props.likeAnime(data);
  }

  return {
    header: <HeaderModal />,
    content: <BodyModal showAddNewCollect={() => showAddNewCollect()} likeAnime={(e) => likeAnime(e)} />
  }
}
