import React from 'react'
import Dp from './assets/profile.png'

const Person = () => {
  return (
    <div className='h-[8vh] bg-transparent flex flex-row items-center gap-3 hover:bg-[#283951] cursor-pointer'>
        <img src={Dp} className='h-[50px] w-[50px] ml-2 rounded-full'/>
        <div className='flex flex-col mt-3'>
          <p className='mt-[-15px] text-xl text-white'>Skanda</p>
          <p className='text-xs text-gray-400'>this is the most recent message</p>
        </div>
    </div>
    
  )
}

export default Person