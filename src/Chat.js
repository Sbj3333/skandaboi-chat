import React from 'react'
// import Chatbg from './assets/chatbg.jpeg'
import Window from './Window'
import Input from './Input'

const Chat = () => {
  return (
    <div className='rounded-br-3xl h-[82vh] flex flex-col'>
        <Window/>
        <Input/>
    </div>
  )
}

export default Chat