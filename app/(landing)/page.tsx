'use client'
import React, { useEffect } from 'react'
import Typewriter, { TypewriterState } from 'typewriter-effect';
import { Button } from '@/components/ui/button'
import { useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import { redirect } from "next/navigation";
import Image from 'next/image'
import { Player } from '@lottiefiles/react-lottie-player'

const LandingPage = () => {
    const words: string[] = ['hello', 'world', 'react', 'typescript']
    const wordCount: number = words.length;
    let currentIndex: number = 0;
    const { session } = useClerk();

    useEffect(() => {
        if (session) {
            redirect('/dashboard')
        }
    }, [session])

    const handleNextWord = (typewriter: any) => {
        typewriter
            .typeString(words[currentIndex])
            .pauseFor(1000)
            .deleteAll()
            .callFunction(() => {
                currentIndex = (currentIndex + 1) % words.length;
                handleNextWord(typewriter);
            })
            .start()
        }


  return (
    <div className='flex justify-center bg-neutral-50 h-full'>
        <div className=' w-full 2xl:w-[1500px] md:w-4/5'>
            <nav className='h-[70px] sm:p-3 p-2 bg-violet-600 flex justify-between items-center rounded-lg my-3'>
                <div className='text-white'>
                    <Image 
                        src="/images/logo-white.png"
                        height={50}
                        width={50}
                        alt='Logo'
                    />
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

            <section id='hero-banner'>
                <div className='sm:h-[550px] h-[500px] flex w-full'>
                    <div className='flex w-full'>
                        <div className='w-[1000px] flex flex-col justify-evenly'>
                            <div>
                                <h2 className='text-neutral-950 sm:text-[5rem] pl-10 items-center flex font-bold'>Let Omni help you with
                                </h2>
                                <h2 
                                    className='text-neutral-950 sm:text-[5rem] pl-10 items-center flex font-bold'
                                    id='smart-text'
                                >
                                    <Typewriter 
                                        onInit={(typewriter) => {
                                            typewriter
                                                .typeString("hello")
                                                .pauseFor(500)
                                                .deleteAll()
                                                .typeString("new")
                                                .start()
                                        }}
                                    />
                                </h2>
                            </div>
                                <Button className='ml-10 text-white font-bold bg-violet-500 h-[50px] w-[150px] hover:bg-violet-700'>
                                    <Link href="/sign-up">
                                    Get Started</Link>
                                </Button>
                        </div>
                        <div className='flex w-[500px] items-center justify-center'>
                            <Player 
                                src="lottie/hero-banner-4.json"
                                autoplay
                                loop
                                className='h-[450px]'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
)
}

export default LandingPage