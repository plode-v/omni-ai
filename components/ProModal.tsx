'use client'

import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialogAction
  } from "@/components/ui/alert-dialog"
import { Button } from './ui/button'
import { Player } from "@lottiefiles/react-lottie-player"
import axios from 'axios'

const Underconstruction = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/stripe');

            window.location.href = response.data.url

        } catch (err) {
            console.log("STRIPE_CLIENT_ERROR", err);
        } finally {
            setLoading(false)
        }
    }

  return (
    <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button variant='premium' className='w-full mb-0'>
                Upgrade
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className='bg-gray-50 w-4/5 sm:w-full rounded-lg'>
            <AlertDialogHeader>
                <AlertDialogTitle className='text-slate-800 font-bold text-2xl'>Upgrade to the Pro Version</AlertDialogTitle>
                    <p className='text-md mt-5 text-black'>Gain unlimited access for all services.</p>
                <AlertDialogDescription>
                    <Player 
                        src={"/lottie/underconstruction.json"}
                        autoplay
                        loop
                        className='sm:h-[300px] h-[180px]'
                    />
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogAction 
                    className='bg-gradient-to-tr from-pink-500 to-violet-500 text-white'
                    onClick={handleClick}
                >Upgrade Now</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default Underconstruction