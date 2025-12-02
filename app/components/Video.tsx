import React from 'react'


type VideoProps = {
    src:string
}
const Video = () => {
  return (
    <div>
        <video src=" /video.mp4"
        className='absolute size-full object-cover object-center top-0 bg-black/50'
        autoPlay
        loop
        muted
        />
    </div>
  )
}

export default Video