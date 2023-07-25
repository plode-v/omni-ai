'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full relative md:flex'>
        <div className='bg-[#1d1d3b] hidden md:flex md:flex-col md:inset-y-0 md:fixed md:w-[17.5rem]'>
        <Sidebar />
        </div>
        <div className='w-full flex justify-center'>
          {/* FIXME: Fix page centering error on 3xl screens */}
          <main className='md:pl-[17.5rem] w-full 3xl:w-3/5 flex-col flex'>
            <Navbar />
            {children}
          </main>
        </div>
    </div>
  )
}

export default DashboardLayout