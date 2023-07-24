import { LucideIcon } from 'lucide-react';
import React from 'react'

interface HeadingProps {
    title: string;
    desc: string;
    icon: LucideIcon;
    iconColor?: string;
    bgColor?: string;
}

const Heading = ({ title, desc, icon, iconColor, bgColor }: HeadingProps) => {
  return (
    <div>Heading</div>
  )
}

export default Heading