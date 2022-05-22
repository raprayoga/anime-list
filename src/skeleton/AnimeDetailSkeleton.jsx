import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { styling } from 'constants'

export default function AnimeDetailSkeleton() {
  return (
    <>
      { window.matchMedia(`(min-width: ${styling.BREAK_POINTS[1]}px)`).matches ? (
      <div>
        <Skeleton count={1} width={'50%'} height={'60px'}/>
        <div style={{display: 'flex'}}>
          <div style={{width: '70%'}}>
            <Skeleton count={1} width={'100%'} height={'700px'}/>
          </div>
          <div style={{marginLeft: '20px', marginTop: '20px', width: '30%'}}>
            <Skeleton count={1} width={'60%'} height={'30px'} style={{marginBottom: '30px'}}/>
            <Skeleton count={1} width={'40%'}  height={'30px'} style={{marginBottom: '30px'}}/>
            <Skeleton count={1} width={'80%'}  height={'30px'} style={{marginBottom: '30px'}}/>
            <Skeleton count={1} width={'40%'}  height={'30px'} style={{marginBottom: '30px'}}/>
            <Skeleton count={1} width={'70%'}  height={'30px'} style={{marginBottom: '30px'}}/>
            <Skeleton count={1} width={'30%'}  height={'30px'} style={{marginBottom: '30px'}}/>
            <Skeleton count={1} width={'90%'}  height={'30px'} style={{marginBottom: '30px'}}/>
            <Skeleton count={1} width={'40%'}  height={'30px'} style={{marginBottom: '30px'}}/>
            <Skeleton count={1} width={'80%'}  height={'30px'} style={{marginBottom: '30px'}}/>
          </div>
        </div>
        <div>
          <Skeleton count={1} width={'20%'}  height={'30px'} />
          <Skeleton count={1} width={'100%'} height={'30px'} />
          <Skeleton count={1} width={'100%'} height={'30px'} />
          <Skeleton count={1} width={'100%'} height={'30px'} />
        </div>
      </div>
      ) : (
        <div>
          <Skeleton count={1} width={'50%'} height={'10vw'} style={{marginBottom: '50px'}}/>
          <Skeleton count={1} width={'100%'} height={'150vw'}/>
          <Skeleton count={1} width={'30%'} height={'20px'}/>
          <Skeleton count={1} width={'50%'} height={'20px'} style={{marginBottom: '20px'}}/>
          <Skeleton count={1} width={'10%'} height={'20px'} style={{marginBottom: '20px'}}/>
          <Skeleton count={1} width={'70%'} height={'20px'} style={{marginBottom: '20px'}}/>
          <Skeleton count={1} width={'10%'} height={'20px'} style={{marginBottom: '20px'}}/>
          <Skeleton count={1} width={'60%'} height={'20px'} style={{marginBottom: '20px'}}/>
          <Skeleton count={1} width={'10%'} height={'20px'} style={{marginBottom: '20px'}}/>
          <Skeleton count={1} width={'100%'} height={'20px'} style={{marginBottom: '20px'}}/>
          <Skeleton count={1} width={'100%'} height={'20px'} style={{marginBottom: '20px'}}/>
          <Skeleton count={1} width={'100%'} height={'20px'} style={{marginBottom: '20px'}}/>
      </div>
      )
      }
    </>
  )
}
