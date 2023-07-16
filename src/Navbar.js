import React from 'react'
import Profile from './assets/profile.png'
import Settings from './assets/options.png'

const Navbar = () => {
  return (
    <div className='h-[8vh] w-full bg-[#283951] rounded-tr-3xl flex gap-[38vw]'>
      <div className='flex items-center gap-3'>
        <img src={Profile} className='h-[50px] w-[50px] object-cover rounded-full ml-4'/>
        <p className='text-white text-xl'>Skanda</p>
      </div>
      <div className='flex items-center'>
        <button>
          <img src={Settings} className='h-[30px] w-[30px] object-cover'/>
        </button>
      </div>
        
    </div>
  )
}

export default Navbar