import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'

const BotAvatar = () => {
  return (
    <Avatar className='h-9 w-9'>
        <AvatarImage src='/public/Logo.png' />
    </Avatar>
  )
}

export default BotAvatar