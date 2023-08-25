'use client'

import React from 'react'
import Heading from '@/components/Heading'
import { WrenchIcon } from 'lucide-react'
import Underconstruction from '@/components/Underconstruction'

const Settings = () => {
  return (
    <div>
      <Heading 
        title='Settings'
        desc=""
        Icon={WrenchIcon}
        iconColor='text-neutral-700'
        bgColor='bg-neutral-500/10'
      />
      <div className='px-4 md:px-6 lg:px-8'>
        <span>
          You are currently on <strong>Free Tier</strong> plan
        </span>
        <div className='w-[100px] mt-5 text-white'>
          <Underconstruction />
        </div>
      </div>
    </div>
  )
}

export default Settings