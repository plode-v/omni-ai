import { LucideIcon } from 'lucide-react';
import React from 'react'

interface HeadingProps {
    title: string;
    desc: string;
    Icon: LucideIcon;
    iconColor?: string;
    bgColor?: string;
}

const Heading = ({ title, desc, Icon, iconColor, bgColor }: HeadingProps) => {
  return (
    <div className='md:px-4 px-6 lg:px-8 flex items-center md:gap-x-4 gap-x-2 md:my-8 my-4'>
        <div className={`${bgColor} p-2 w-fit rounded-md`}>
            <Icon 
                className={`md:w-10 md:h-10 h-8 w-8 ${iconColor}`}
            />
        </div>
        <div className=''>
            <h1 className='font-[700] md:text-3xl text-xl'>{title}</h1>
            <p className='text-muted-foreground md:text-sm text-xs'>{desc}</p>
        </div>
    </div>
  )
}

export default Heading