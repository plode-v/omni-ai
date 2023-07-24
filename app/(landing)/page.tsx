'use client'
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import { redirect } from "next/navigation";

const LandingPage = () => {
    const { session } = useClerk();

    useEffect(() => {
        if (session) {
            redirect('/dashboard')
        }
    }, [session])

  return (
    <div>
        LandingPage (unprotected)
        <div>
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
    </div>
  )
}

export default LandingPage