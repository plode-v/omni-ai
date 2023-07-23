import React from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='flex p-3 border'>
        <Button variant='ghost' size='icon' className='md:hidden' >
            <Menu />
        </Button>
        <div className='flex justify-end w-full'>
            <UserButton afterSignOutUrl='/' />
        </div>
    </div>
  )
}

export default Navbar