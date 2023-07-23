import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Sidebar = () => {

  return (
    <div className='py-5 space-y-4 flex flex-col text-white'>
        <div className='px-5 flex-1'>
            <Link href="/dashboard" className='flex items-center justify-start p-1 mb-14 w-min'>
                <div className='h-[2.5rem] w-[2.5rem] relative mr-4'>
                    <Image 
                        src="/logo.png"
                        fill
                        alt='logo'
                    />
                </div>
            </Link>
        </div>
</div>
  )
}

export default Sidebar