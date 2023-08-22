import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const HomeNav = () => {
  return (
    <nav className='h-[70px] sm:p-3 p-2 bg-violet-600 flex justify-between items-center rounded-lg fixed w-full md:w-4/5 2xl:w-[1500px] my-2 z-20'>
                <div className='text-white'>
                    <Link href="/">
                        <Image 
                            src="/images/logo-white.png"
                            height={45}
                            width={45}
                            alt='Logo'
                        />
                    </Link>
                </div>
                <div className='flex sm:gap-3'>
                    <Link href="/sign-in">
                        <Button className='scale-[0.85] sm:scale-100' variant="outline">
                            Sign In
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button className='scale-[0.85] sm:scale-100' variant="outline">
                            Register
                        </Button>
                    </Link>
                </div>
            </nav>
  )
}

export default HomeNav