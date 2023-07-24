'use-client'
import React from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Sidebar from './Sidebar'

const MobileSidebar = () => {
  return (
    <Sheet>
        <SheetTrigger asChild className='bg-white'>
            <Button variant='ghost' size='icon' className='md:hidden' >
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent side='left' className='bg-[#1d1d3b]'>
            <Sidebar />
        </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar