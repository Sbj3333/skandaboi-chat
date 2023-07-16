import React from 'react'
import background from './assets/bg4.png'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Chat from './Chat'


const Home = () => {
  return (
    <div className='relative'>
        <img src={background} className= 'h-screen w-screen object-cover fixed'/> 
        <div className='absolute h-screen w-screen flex items-center justify-center'>
            <div className='h-[90vh] w-[75vw] rounded-3xl flex flex-row'>
                <Sidebar/>
                <div className='h-full w-[52vw] bg-red-400 flex flex-col rounded-r-3xl'>
                    <Navbar/>
                    <Chat/>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Home