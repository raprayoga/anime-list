/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react'
import AnimFavoriteList from 'components/organisms/AnimFavoriteList'
import CollectionList from 'components/organisms/CollectionList'
import { showCollectionAlbum, removeCollectionAlbum } from 'stores/ManageCollection'
import voidIllustration from 'assets/image/voidIllustration.png'

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

  const removeCollect = async (name) => {
    await removeCollectionAlbum(name.name)
    setAnimeList({})
    getDataCollect()
    setCollectionChoosed(false)
  }

  const container = css`
    margin: auto;
    max-width: 800px;
    ${styling.MQMIN[2]} {
      display: flex;
      dlex-direction: row
    }
  `

  const illustrationStyle = css`
    margin-top: 30px;
    width: 100%;
    margin: auto;
    max-width: 600px;
  `

  return (
    <div css={container}>
      {Object.keys(collections).length > 0 ? (
        <>
          <CollectionList 
            data={collections}
            chooseCollect={(e) => chooseCollect(e)}
            removeCollect={(e) => removeCollect(e)}
            />
          <AnimFavoriteList
            data={animeList}
            collectionChoosed={collectionChoosed}
          />
        </>
      ) : (
        <img src={voidIllustration} alt={`image onload`} css={illustrationStyle} />
      )
      }
    </div>
  )
}
