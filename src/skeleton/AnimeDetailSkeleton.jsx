import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function AnimeDetailSkeleton() {
  return (
    <>
      <Skeleton count={1} width={'50%'} height={'5vw'}/>
      <Skeleton count={1} width={'70%'} height={'500px'}/>
      <Skeleton count={1} width={'10%'} />
      <Skeleton count={1} width={'50%'} />
      <Skeleton count={1} width={'10%'} />
      <Skeleton count={1} width={'70%'} />
      <Skeleton count={1} width={'10%'} />
      <Skeleton count={1} width={'60%'} />
      <Skeleton count={1} width={'10%'} />
      <Skeleton count={1} width={'100%'} />
      <Skeleton count={1} width={'100%'} />
      <Skeleton count={1} width={'100%'} />
    </>
  )
}
