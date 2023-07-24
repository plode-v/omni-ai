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
        <main className='md:pl-[17.5rem] w-full'>
          <Navbar />
          {children}
        </main>
    </div>
  )
}

export default DashboardLayout