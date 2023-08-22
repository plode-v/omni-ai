'use client'
import React, { useEffect, useMemo, useState } from 'react'
import "./styles.css"
import { Button } from '@/components/ui/button'
import { useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import { redirect } from "next/navigation";
import Image from 'next/image'
import { Player } from '@lottiefiles/react-lottie-player'

const LandingPage = () => {
    const words: string[] = useMemo(() =>  ['hello', 'world', 'react', 'typescript'], []);
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
    <div className='flex justify-center bg-neutral-50 h-max'>
        <div className=' w-full md:w-4/5 2xl:w-[1500px]'>
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

            <section id='hero-banner' className='mb-[200px]'>
                {/* FIXME: fix the typewriting effect */}
                <div className='sm:h-[550px] h-[500px] flex w-full pt-[120px]'>
                    <div className='flex w-full'>
                        <div className='w-[1000px] flex flex-col justify-evenly ml-10'>
                            <div>
                                <h2 className='text-neutral-950 sm:text-[3.5rem] 2xl:text-[4.5rem] items-center flex font-bold'>Let Omni help you with
                                </h2>
                                <span className='text-pink-500 sm:text-[4.5rem] 2xl:text-[4.5rem] leading-10 items-center flex font-bold'>{text}</span>
                                <p className='mt-[50px] w-[580px]'>Unlock limitless AI possibilities with Omni AI - Your All-in-One subscription for seamless content creation and more.</p>
                            </div>
                                <Button className='text-white font-bold bg-violet-500 h-[50px] w-[150px] hover:bg-violet-700 mt-[100px]'>
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
            </section>
        </div>
    </div>
)
}

export default LandingPage