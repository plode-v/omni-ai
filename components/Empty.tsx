import React from 'react'
import { Player } from "@lottiefiles/react-lottie-player"

interface EmptyProps {
    label: string;
}

const EmptyComponent = ({ label }: EmptyProps ) => {
  return (
    <div className="items-center justify-center w-full flex flex-col md:mt-5">
        <Player 
          src={'/lottie/empty.json'}
          loop={1}
          autoplay
          speed={0.8}
          className='md:h-[24rem] h-[20rem]'
        />
        <h2 className='font-[600] capitalize text-sm md:text-md mt-4 md:mt-8'>
            {label}
        </h2>
    </div>
  )
}

export default EmptyComponent