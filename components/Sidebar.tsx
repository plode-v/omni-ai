import Link from 'next/link'
import React from 'react'

const Sidebar = () => {

  return (
    <div className='py-4 space-y-4 flex flex-col text-white'>
        <div className='px-3 py-2 flex-1'>
            <Link href="/dashboard" className='flex items-center justify-start p-1 mb-14 w-min'>
                Logo
            </Link>
        </div>
</div>
  )
}

export default Sidebar