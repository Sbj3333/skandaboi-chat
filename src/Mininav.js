import React from 'react'
import Profile from './assets/profile.png'
import Settings from './assets/options.png'
import Message from './assets/messageicon.png'

const Mininav = () => {
  return (
    <div className='w-full h-[8vh] bg-[#27374D] rounded-tl-3xl'>
        <div className='flex flex-row gap-[13vw]'>
            <img src={Profile} className='h-[50px] w-[50px] rounded-full object-cover mt-1.5 ml-2'/>
            <div className='flex mt-[16px] gap-7'>
                <button>
                    <img src={Message} className='h-[30px] w-[30px] object-cover'/>
                </button>
                <button>
                    <img src={Settings} className='h-[30px] w-[30px] object-cover'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Mininav