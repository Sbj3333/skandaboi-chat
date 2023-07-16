import React from 'react'
import video from './assets/video1.mp4'


const Backgroundvideo = () => {
  return (
    <div>
        <video className=' h-screen w-screen m-0 p-0 object-cover fixed z-0' src={video} autoPlay loop muted />
    </div>
  )
}

export default Backgroundvideo