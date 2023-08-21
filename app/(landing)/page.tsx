'use client'
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import { redirect } from "next/navigation";
import Image from 'next/image'
import { Player } from '@lottiefiles/react-lottie-player'

const LandingPage = () => {
    const { session } = useClerk();

    useEffect(() => {
        if (session) {
            redirect('/dashboard')
        }
    }, [session])

  return (
    <div className='flex justify-center bg-neutral-50 h-full'>
        <div className=' w-full 2xl:w-[1500px] md:w-4/5'>
            <nav className='h-[70px] sm:p-3 p-2 bg-teal-500 flex justify-between items-center rounded-lg my-3'>
                <div className='text-white'>
                    <Image 
                        src="/images/logo black.png"
                        height={50}
                        width={50}
                        alt='Logo'
                    />
                </div>
                <div className='flex sm:gap-3'>
                    <Link href="/sign-in">
                        <Button className='scale-[0.85] sm:scale-100' variant="secondary">
                            Sign In
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button className='scale-[0.85] sm:scale-100' variant="secondary">
                            Register
                        </Button>
                    </Link>
                </div>
            </nav>

            <section id='hero-banner'>
                <div className='sm:h-[550px] h-[500px] flex w-full'>
                    <div className='flex w-full'>
                        <div className='flex w-[1000px]'>
                            <h2 className='text-neutral-950 sm:text-[5rem] pl-10 items-center flex font-bold'>Let Omni help you with ...</h2>
                        </div>
                        <div className='flex w-[500px] items-center justify-center pt-10'>
                            <Player 
                                src="lottie/hero-banner-2.json"
                                autoplay
                                loop
                                className='h-[500px]'
                            />
                        </div>
                    </div>
                </div>
                <Button className='ml-10 text-white font-bold bg-teal-600 h-[50px] w-[150px]'>Get started</Button>
            </section>
        </div>
    </div>
  )
}

export default LandingPage