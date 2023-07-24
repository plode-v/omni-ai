import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useUser } from '@clerk/nextjs';

const UserAvatar = () => {

    const { user } = useUser();

  return (
    <div className='w-9 h-9'>
        <Avatar>
            <AvatarImage 
                src={user?.profileImageUrl}
            />
            <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
            </AvatarFallback>
        </Avatar>
    </div>
  )
}

export default UserAvatar