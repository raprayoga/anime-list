/** @jsxImportSource @emotion/react */
import React, { useRef, useState, useEffect } from 'react'
import LikeButton from 'components/molecules/LikeButton'
import DetailAnime from 'components/organisms/DetailAnime'
import LikeAnimeModal from 'components/organisms/LikeAnimeModal'
import { CollectionsContext } from 'stores/context/CollectionsContext'
import { AnimeDetailContext } from 'stores/context/AnimeDetailContext'
import { showCollectionAlbum } from 'stores/ManageCollection'

import { css } from '@emotion/react'

export default function DetailTemplate() {
  const modalRef = useRef();
  const [collections, setCollections] = useState({})
  const [animeDetail, setAnimeDetail] = useState({})

  useEffect(() => {
    const getDataCollect = async () => {
      const data = await showCollectionAlbum()
      await setCollections(data)
    }
    getDataCollect()
  }, []);

  const updateData = async (data) => {
    await setCollections(data)
  }

  const passAnimedata = async (data) => {
    await setAnimeDetail(data)
  }

  const container = css`
    margin: auto;
    max-width: 800px;
  `

  return (
    <CollectionsContext.Provider value={collections}>
      <AnimeDetailContext.Provider value={animeDetail}>
        <div css={container}>
          <DetailAnime 
            passAnimedata={(e) => passAnimedata(e)}
          />
          <LikeButton 
            onClick={() => modalRef.current.showModal()}
          />
          <LikeAnimeModal
            propRef={modalRef}
            updateData={(e) => updateData(e)}  
          />
        </div>
      </AnimeDetailContext.Provider>
    </CollectionsContext.Provider>
  )
}
