function initiateLocalStorage() {
  const data = localStorage.getItem("collections")
  if (!data) {
    localStorage.setItem("collections", JSON.stringify({collections: {}}))
  }
}

function showCollectionAlbum() {
  let data = localStorage.getItem("collections")
  return JSON.parse(data).collections
}

function addCollectionAlbum(name) {
  let data = localStorage.getItem("collections")
  data = JSON.parse(data)
  const collectionList = data.collections
  if ( collectionList[name] !== undefined ) return {exist: true}
  
  data.collections[name] = {}
  localStorage.setItem("collections", JSON.stringify(data))

  return {exist: false, data: data.collections}
}

function removeCollectionAlbum(name) {
  let data = localStorage.getItem("collections")
  data = JSON.parse(data)
  const collectionList = data.collections
  if ( collectionList[name] === undefined ) return {exist: false}

  delete data.collections[name]
  localStorage.setItem("collections", JSON.stringify(data))
  
  return  {exist: true, data: data.collections}
}

function likeAnime(collectionName, payload) {
  let data = localStorage.getItem("collections")
  data = JSON.parse(data)
  const collectionList = data.collections
  if ( collectionList[collectionName] === undefined ) return {sucess: false, message: 'collection does not exist'}

  const idAnime = payload.Media.id
  if ( collectionList[collectionName][idAnime] !== undefined ) return {sucess: false, message: 'anime does exist'}

  data.collections[collectionName][idAnime] = payload
  localStorage.setItem("collections", JSON.stringify(data))

  return  {success: true, message: 'Success like anime', data: data.collections}
}

function removeAnime(collectionName, id) {
  let data = localStorage.getItem("collections")
  data = JSON.parse(data)
  const collectionList = data.collections
  if ( collectionList[collectionName] === undefined ) return {sucess: false, message: 'collection does not exist'}

  if ( collectionList[collectionName][id] !== undefined ) return {sucess: false, message: 'anime has removed before'}
  
  delete data.collections[collectionName][id]
  localStorage.setItem("collections", JSON.stringify(data))

  return data.collections
}

function animeAlreadyLiked(id) {
  let data = localStorage.getItem("collections")
  data = JSON.parse(data)
  const collectionList = data.collections

  let doesAnimeExist = []
  doesAnimeExist = Object.keys(collectionList).map(function(collectionName) {
    Object.keys(collectionName).map(function(idAnime) {
      if (collectionList[collectionName][idAnime] !== undefined) {
        return collectionList[collectionName][idAnime]
      }
    });
  });

  return doesAnimeExist 
}

export { initiateLocalStorage, showCollectionAlbum, addCollectionAlbum, removeCollectionAlbum, likeAnime, removeAnime, animeAlreadyLiked }