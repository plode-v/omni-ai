import React from 'react'
import Image from 'next/image'

const TechLogo = () => {
  return (
    <div className="flex flex-col mt-20 justify-center items-center">
        <div className='font-semibold text-neutral-600 capitalize text-[1rem] leading-0 -mb-5'>
            technologies we use
        </div>
        <div className='items-center grayscale-[1] opacity-50 slide-track grid grid-cols-6 gap-[40px]'>
            <Image 
                src="/images/open-ai-logo.png"
                height={150}
                width={150}
                alt='open-ai'
            />
            <Image 
                src="/images/prisma-logo.png"
                height={150}
                width={150}
                alt='prisma'
            />
            <Image 
                src="/images/next-logo.png"
                height={150}
                width={150}
                alt='nextjs'
            />
            <Image 
                src="/images/replicate-logo.svg"
                height={150}
                width={150}
                alt='replicate'
            />
            <Image 
                src="/images/clerk-logo.jpg"
                height={150}
                width={150}
                alt='clerk'
            />
            <Image 
                src="/images/lottiefiles-logo.svg"
                height={150}
                width={150}
                alt='lottiefiles'
            />
        </div>
    </div>
  )
}

export default TechLogo