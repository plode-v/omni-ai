import React from 'react'
import Heading from '@/components/Heading'
import { MessageSquare } from 'lucide-react'

const Conversation = () => {
  return (
    <div>
      <Heading
        title='Conversation'
        desc='Advanced conversation model'
        icon={MessageSquare}
        iconColor='text-yellow-500'
        bgColor='bg-yellow-500/10'
      />
    </div>
  )
}

export default Conversation