import React from 'react'
import Image from 'next/image'


// FIXME: make the loader absolute, in the middle of screen, and blur bg when loading
const Loader = () => {
  return (
    <div className='flex items-center flex-col justify-center mt-10'>
        <div className='w-10 h-10 md:h-14 md:w-14 items-center justify-center flex relative'>
            <Image
                src='/logo.png'
                fill
                alt="loading"
                className='animate-spin'
            />
        </div>
    </div>
  )
}

export default Loader