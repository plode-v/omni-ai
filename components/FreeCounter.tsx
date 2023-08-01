'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card';
import { maxFreeCount } from '@/constants';
import { Progress} from './ui/progress';
import { Button } from './ui/button';


const FreeCounter = ({ apiLimitCount = 0 }: { apiLimitCount: number }) => {

  return (
    <div className=''>
        <Card
            className='bg-white/10 border-0 text-white p-3 flex flex-col w-full h-full'
        >
          <CardContent className='md:py-3 md:space-y-3 space-y-2 items-center flex-col flex justify-center'>
            <div className='text-sm text-center'>
              Free Tier {apiLimitCount} / {maxFreeCount}
            </div>
            <Progress 
              className='bg-yellow-500 h-2'
              value={(apiLimitCount / maxFreeCount) * 100}
            />
            <Button
              variant='premium'
              className='w-full mb-0'
            >
              Upgrade
            </Button>
          </CardContent>
        </Card>
    </div>
  )
}

export default FreeCounter