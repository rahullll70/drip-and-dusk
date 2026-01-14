import React from 'react'


const Hero = () => {
  return (
    <div className='h-screen w-full'>
      <div className=' w-full h-screen'>
        <video src="/videos/hero_video.mp4" 
        autoPlay
        muted
        loop
        />
      </div>
    </div>
  )
}

export default Hero
