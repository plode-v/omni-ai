'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

interface ApiLimitResponse {
  count: number;
}

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  const [apiLimitCount, setApiLimitCount] = useState<number>(0);

  useEffect(() => {
    const fetchApiLimitCount = async () => {
      try {
        const response = await fetch("/api/api-limit");
        const data: ApiLimitResponse = await response.json();
        setApiLimitCount(data.count);

      } catch (err) {
        console.error("Error fetching API limit count: ",err);
      }
    }
      fetchApiLimitCount();
  }, [])

  return (
    <div className='h-full relative md:flex'>
        <div className='bg-[#1d1d3b] hidden md:flex md:flex-col md:inset-y-0 md:fixed md:w-[17.5rem]'>
        <Sidebar apiLimitCount={apiLimitCount} />
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