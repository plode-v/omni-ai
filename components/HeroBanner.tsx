import React, { useState, useEffect, useMemo } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Player } from '@lottiefiles/react-lottie-player'

const HeroBanner = () => {

    const words: string[] = useMemo(() => ['automation', 'content creation', 'anything'], []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [text, setText] = useState(words[0]);

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
    <div className='sm:h-[550px] h-[500px] flex w-full pt-[120px] mb-[200px]'>
        <div className='flex w-full'>
            <div className='w-[1000px] flex flex-col justify-evenly ml-10'>
                <div>
                    <h2 className='text-neutral-950 sm:text-[3.5rem] 2xl:text-[4.5rem] items-center flex font-bold'>Let Omni help you with
                    </h2>
                    <span className='text-pink-500 sm:text-[4.5rem] 2xl:text-[4.5rem] leading-[50px] items-center flex font-bold'>{text}</span>
                    <p className='mt-[50px] w-[580px] font-semibold text-[14px] opacity-60 capitalize'>Unlock limitless AI possibilities with Omni AI - Your All-in-One subscription for seamless content creation and more.</p>
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
  )
}

export default HeroBanner