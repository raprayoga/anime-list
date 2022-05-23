/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react'
import AnimFavoriteList from 'components/organisms/AnimFavoriteList'
import CollectionList from 'components/organisms/CollectionList'
import { showCollectionAlbum } from 'stores/ManageCollection'

import { css } from '@emotion/react'
import { styling } from 'constants'

export default function FavoriteTemplate() {
  const [collections, setCollections] = useState({})
  const [animeList, setAnimeList] = useState({})
  const [collectionChoosed, setCollectionChoosed] = useState(false)

  const getDataCollect = async () => {
    const data = await showCollectionAlbum()
    await setCollections(data)
  }
  
  useEffect(() => {
    getDataCollect()
  }, []);

  const chooseCollect = (name) => {
    setAnimeList(collections[name])
    setCollectionChoosed(true)
  }

  const container = css`
    margin: auto;
    max-width: 800px;
    ${styling.MQMIN[2]} {
      display: flex;
      dlex-direction: row
    }
  `

  return (
    <div css={container}>
      <CollectionList 
        data={collections}
        chooseCollect={(e) => chooseCollect(e)}
        />
      <AnimFavoriteList
        data={animeList}
        collectionChoosed={collectionChoosed}
      />
    </div>
  )
}
