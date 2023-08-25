import React from 'react'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from './ui/button'
import { Player } from "@lottiefiles/react-lottie-player"

const Underconstruction = () => {
  return (
    <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button variant='premium' className='w-full mb-0'>
                Upgrade
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className='bg-gray-50 w-4/5 sm:w-full rounded-lg'>
            <AlertDialogHeader>
                <AlertDialogTitle className='text-slate-800 font-bold text-2xl'>Under Contruction</AlertDialogTitle>
                    <p className='text-md mt-5 text-black'>This feature is still under the development</p>
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
                <AlertDialogCancel className='bg-black text-white'>Continue</AlertDialogCancel>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default Underconstruction