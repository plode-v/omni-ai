import React from 'react'
import Heading from '@/components/Heading'
import { WrenchIcon } from 'lucide-react'
import { UserProfile } from '@clerk/nextjs'
import { checkSub } from "@/lib/subscription"
import ProModal from '@/components/ProModal'

const Settings = async () => {

  const isPro = await checkSub();


  return (
    <div className='overflow-hidden'>
      <Heading 
        title='Settings'
        desc="Manage account settings"
        Icon={WrenchIcon}
        iconColor='text-neutral-700'
        bgColor='bg-neutral-500/10'
      />
      <div className='px-4 md:px-6 lg:px-8'>
        <span>
          You are currently on <strong>{isPro ? "Pro Tier" : "Free Tier"}</strong>
        </span>
        {!isPro && (
          <div className='w-[100px] mt-5 text-white'>
            <ProModal />
          </div>
        )}
      </div>
      {/* FIXME: fix on md sized screens */}
      {/* <div className='lg:h-3/4 flex lg:flex justify-center xl:justify-start xl:ml-8 xl:mt-10 mt-5 md:hidden'>
        <UserProfile />
      </div> */}
    </div>
  )
}

export default Settings