import React from 'react'
import Mininav from './Mininav'
import Contacts from './Contacts'

const Sidebar = () => {
  return (
    <div className='h-full w-[23vw] flex flex-col rounded-l-3xl'>
        <Mininav/>
        <Contacts/>
    </div>
  )
}

export default Sidebar