'use client'
import React, { useEffect, useState } from 'react'
import Typewriter, { TypewriterState } from 'typewriter-effect';
import { Button } from '@/components/ui/button'
import { useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import { redirect } from "next/navigation";
import Image from 'next/image'
import { Player } from '@lottiefiles/react-lottie-player'

const LandingPage = () => {
    const words: string[] = ['hello', 'world', 'react', 'typescript']
    const [currentIndex, setCurrentIndex] = useState(0);
    const [text, setText] = useState(words[0]);
    const { session } = useClerk();

    useEffect(() => {
        if (session) {
            redirect('/dashboard')
        }
    }, [session])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevText) => (prevText + 1) % words.length);
        }, 2000);

        return () => {
            clearInterval(interval);
        }
    }, [words])

    useEffect(() => {
        setText(words[currentIndex]);
    }, [words, currentIndex]);


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
                {/* FIXME: fix the typewriting effect */}
                <div className='sm:h-[550px] h-[500px] flex w-full'>
                    <div className='flex w-full'>
                        <div className='w-[1000px] flex flex-col justify-evenly ml-10'>
                            <div>
                                <h2 className='text-neutral-950 sm:text-[4.5rem] items-center flex font-bold'>Let Omni help you with
                                </h2>
                                <span className='text-pink-500 sm:text-[4.5rem] items-center flex font-bold'>{text}</span>
                            </div>
                                <Button className='text-white font-bold bg-violet-500 h-[50px] w-[150px] hover:bg-violet-700'>
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
            <section id="technologies">
                <div className="flex flex-col items-center mt-20">
                    <span className='font-semibold text-neutral-600 capitalize text-[1.5rem]'>
                        technologies we are using
                    </span>
                    <div className='grid-cols-4 grid gap-[50px] items-center'>
                        <Image 
                            src="/images/open-ai-logo.png"
                            height={200}
                            width={200}
                            alt='open-ai'
                            className='opacity-50'
                        />
                        <Image 
                            src="/images/replicate-logo.svg"
                            height={200}
                            width={200}
                            alt='open-ai'
                            className='opacity-50'
                        />
                        <Image 
                            src="/images/prisma-logo.png"
                            height={200}
                            width={200}
                            alt='open-ai'
                            className='grayscale-[1] opacity-50'
                        />
                        <Image 
                            src="/images/clerk-logo.jpg"
                            height={200}
                            width={200}
                            alt='open-ai'
                            className='mix-blend-multiply grayscale-[1] opacity-50'
                        />
                    </div>
                </div>
            </section>
        </div>
    </div>
)
}

export default LandingPage