import React from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { getApiLimitCount } from '@/lib/api-limit'

const DashboardLayout = async ({ 
  children,
}: { 
  children: React.ReactNode 
}) => {

  const apiLimitCount = await getApiLimitCount();

  return (
    <div className='h-full relative md:flex'>
        <div className='bg-[#1d1d3b] hidden md:flex md:flex-col md:inset-y-0 md:fixed md:w-[17.5rem]'>
        <Sidebar apiLimitCount={apiLimitCount} />
        </div>
        <div className='w-full flex justify-center'>
          <main className='md:pl-[17.5rem] w-full 3xl:w-3/5 flex-col flex'>
            <Navbar />
            {children}
          </main>
        </div>
    </div>
  )
}

export default DashboardLayout