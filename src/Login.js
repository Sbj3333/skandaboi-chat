import React from 'react'
import Backgroundvideo from './Backgroundvideo'

const Login = () => {
  return (
    <div className='relative'>
        <Backgroundvideo/>
        <div className='absolute items-center justify-center top-1/2 left-1/2 translate-y-2/3 -translate-x-1/2'>
            <div className='h-[40vh] w-[30vw] bg-[#ffffff] flex flex-col  items-center rounded-3xl'>
                <div className='text-[#000000] text-3xl font-extrabold mt-[25px] font-mono'>Welcome to my universe</div>
                <div className='text-[#000000] text-xl mt-4'>Login fast your friends are waiting</div>
                <form className='flex flex-col mt-[5vh] gap-5 items-center'>
                    <input placeholder='Enter Your Username' type='text'></input>
                    <input placeholder='Enter Your Super Secret Password' type='password'></input>
                    <button className='bg-[#0f15d3] h-9 w-[10vw] text-white rounded-3xl'>Let's say Hello !</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login