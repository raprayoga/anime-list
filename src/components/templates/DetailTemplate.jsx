/** @jsxImportSource @emotion/react */
import React, { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LikeButton from 'components/molecules/LikeButton'
import LikedButton from 'components/molecules/LikedButton'
import DetailAnime from 'components/organisms/DetailAnime'
import LikeAnimeModal from 'components/organisms/LikeAnimeModal'
import { CollectionsContext } from 'stores/context/CollectionsContext'
import { AnimeDetailContext } from 'stores/context/AnimeDetailContext'
import { animeAlreadyLiked, removeAnime, showCollectionAlbum } from 'stores/ManageCollection'

import { css } from '@emotion/react'

export default function DetailTemplate() {
  const modalRef = useRef();
  let { id } = useParams();
  const [collections, setCollections] = useState({})
  const [animeDetail, setAnimeDetail] = useState({})
  const [hasLike, setHasLike] = useState(false)
  const [currentAlbum, setCurrentAlbum] = useState(false)

  useEffect(() => {
    const getDataCollect = async () => {
      const data = await showCollectionAlbum()
      await setCollections(data)
    }

    const data = animeAlreadyLiked(id)
    if (data) {
      setHasLike(true)
      setAnimeDetail(data.data)
      setCurrentAlbum(data.collectionName)
    }
    
    getDataCollect()
  }, []);

  const updateData = async (data) => {
    await setCollections(data)
  }

  const passAnimedata = async (data) => {
    if (!hasLike) await setAnimeDetail(data)
  }

  const removeLike = async () => {
    const data = await removeAnime(currentAlbum, id)
    setHasLike(false)
  }

  const likeAnime = (data) => {
    setHasLike(true)
    setCurrentAlbum(data)
    modalRef.current.closeModal()
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
          {hasLike ? (
            <LikedButton 
              onClick={() => removeLike()}
            />
          ) : (
            <LikeButton 
              onClick={() => modalRef.current.showModal()}
            />
          )}
          <LikeAnimeModal
            propRef={modalRef}
            updateData={(e) => updateData(e)}
            likeAnime={(e) => likeAnime(e)}
          />
        </div>
      </AnimeDetailContext.Provider>
    </CollectionsContext.Provider>
  )
}
