import React from 'react'
import Image from 'next/image'


interface LabelInterface {
  label: string
}

// FIXME: make the loader absolute, in the middle of screen, and blur bg when loading
const Loader = ({ label }: LabelInterface) => {
  return (
    <div className='flex items-center flex-col justify-center mt-10 bg-slate-100 p-4 mx-4 md:mx-6 lg:mx-8 rounded-lg'>
        <div className='w-10 h-10 md:h-14 md:w-14 items-center justify-center flex relative '>
            <Image
                src='/logo.png'
                fill
                alt="loading"
                className='animate-spin'
            />
        </div>
        <p className='text-muted-foreground mt-4 text-xs md:text-sm'>{label}</p>
    </div>
  )
}

export default Loader