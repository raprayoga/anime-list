import React, { useState } from 'react'
import ChooseCollection from 'components/molecules/ChooseCollectionModal'
import AddNewCollecModal from 'components/molecules/AddNewCollecModal'
import Modal from 'components/atoms/Modal'

export default function LikeAnimeModal(props) {
  const [addCollection, setAddCollection] = useState(false)

  const showAddNewCollect = () => {
    setAddCollection(true)
  }

  const hideAddNewCollect = () => {
    setAddCollection(false)
  }

  const updateData = (data) => {
    props.updateData(data)
  }
  
  const insideModal = () => {
    return !addCollection ?
    ChooseCollection({hideAddNewCollect: () => hideAddNewCollect(), showAddNewCollect: () => showAddNewCollect()})
    :
    AddNewCollecModal({hideAddNewCollect: () => hideAddNewCollect(), updateData: (e) => updateData(e)})
  }


  return (
    <>
      <Modal
        ref={props.propRef}
        {... insideModal()}
      />
    </>
  )
}
