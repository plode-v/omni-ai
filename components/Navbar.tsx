import React from 'react'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './MobileSidebar'

const Navbar = () => {

  return (
    <div className='flex p-3'>
      <MobileSidebar />
        <div className='flex justify-end w-full'>
            <UserButton afterSignOutUrl='/' />
        </div>
    </div>
  )
}

export default Navbar