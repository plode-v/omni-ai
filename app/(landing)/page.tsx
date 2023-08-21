'use client'
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import { redirect } from "next/navigation";
import Image from 'next/image'

const LandingPage = () => {
    const { session } = useClerk();

    useEffect(() => {
        if (session) {
            redirect('/dashboard')
        }
    }, [session])

  return (
    <div>
        <nav className='h-full p-3 bg-white border-black border-2 flex justify-between items-center mx-3 rounded-lg mt-2'>
            <div className='text-white'>
                <Image 
                    src="/images/Logo.png"
                    height={50}
                    width={50}
                    alt='Logo'
                />
            </div>
            <div className='flex gap-3'>
                <Link href="/sign-in">
                    <Button>
                        Sign In
                    </Button>
                </Link>
                <Link href="/sign-up">
                    <Button>
                        Register
                    </Button>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default LandingPage