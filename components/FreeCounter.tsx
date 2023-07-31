'use client'
import React, { useEffect, useState } from 'react'
import { Card } from './ui/card';

interface FreeCounterProps {
    apiLimitCount: number;
}

const FreeCounter = ({ apiLimitCount = 0 }: FreeCounterProps) => {

    // const [mounted, setMounted] = useState(false)

    // useEffect(() => {
    //     setMounted(true);
    // }, []);

    // // This is for preventing hydration error.
    // if (!mounted) {
    //     return null;
    // }

  return (
    <div className='px-3s'>
        <Card
            className='bg-black/10 border-0 text-white p-3'
        >
            FreeCounter = {apiLimitCount}
        </Card>
    </div>
  )
}

export default FreeCounter