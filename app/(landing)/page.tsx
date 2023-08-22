'use client'
import React, { useEffect } from 'react'
import "./styles.css"
import { useClerk } from '@clerk/nextjs'
import { redirect } from "next/navigation";
import HomeNav from '@/components/HomeNav'
import HeroBanner from '@/components/HeroBanner'
import TechLogo from '@/components/TechLogo'
import AboutUs from '@/components/AboutUs';

const LandingPage = () => {
    const { session } = useClerk();

    useEffect(() => {
        if (session) {
            redirect('/dashboard')
        }
    }, [session])


  return (
    <div className='flex justify-center bg-neutral-50 h-max'>
        <div className=' w-full md:w-4/5 2xl:w-[1500px]'>
            <HomeNav />
            <HeroBanner />
            <TechLogo />
            <AboutUs />
        </div>
    </div>
)
}

export default LandingPage