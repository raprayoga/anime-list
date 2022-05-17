import React from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function BannerSkeleton() {
  return (
    <Skeleton count={1} width={'100%'} height={'30vw'}/>
  )
}
