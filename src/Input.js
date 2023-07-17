import React from 'react'
import Emoji from './assets/emoji.png'
import Send from './assets/send.png'


const Input = () => {
  return (
    <div className='bg-[#283951] h-[55px] rounded-br-3xl flex items-center'>
        <img src={Emoji} className='h-[30px] w-[30px] object-cover ml-4'/>
        <div className='gap-5 flex flex-row items-center'>
            <input placeholder='Type your message' className='h-[40px] w-[43vw] rounded-lg ml-[16px] bg-[#dddddd] text-white'/>
            <img src={Send} className='h-[30px] w-[30px] object-cover'/>
        </div>
        
    </div>
  )
}

export default Input