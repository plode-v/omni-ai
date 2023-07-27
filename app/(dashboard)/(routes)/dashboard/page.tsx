'use client'
import { MessageSquare, FileImageIcon, VideoIcon, Music4Icon, Code2Icon, WrenchIcon, MoveRight } from 'lucide-react'
import React from 'react'
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'


const Dashboard = () => {
  // const tools = [
  //   {
  //       label: "Conversation",
  //       icon: MessageSquare,
  //       href: "/conversation",
  //       color: "text-yellow-500",
  //       bgColor: "bg-yellow-500/10"
  //   },
  //   {
  //       label: "Image Generation",
  //       icon: FileImageIcon,
  //       href: "/image",
  //       color: "text-green-500",
  //       bgColor: "bg-green-500/10"
  //   },
  //   {
  //       label: "Video Generation",
  //       icon: VideoIcon,
  //       href: "/video",
  //       color: "text-pink-500",
  //       bgColor: "bg-pink-500/10"
  //   },
  //   {
  //       label: "Music Generation",
  //       icon: Music4Icon,
  //       href: "/music",
  //       color: "text-violet-500",
  //       bgColor: "bg-violet-500/10"
  //   },
  //   {
  //       label: "Code Generation",
  //       icon: Code2Icon,
  //       href: "/code",
  //       color: "text-orange-500",
  //       bgColor: "bg-orange-500/10"
  //   },
  //   {
  //       label: "Settings",
  //       icon: WrenchIcon,
  //       href: "/settings",
  //       color: "text-black",
  //       bgColor: 'bg-black/5'
  //   },
  // ];
  // const router = useRouter();

  // return (
  //   <div className='space-y-2 md:mt-8 mt-4'>
  //     <div className='2xl:mb-20 mb-8'>
  //       <h1 className='text-2xl md:text-4xl pb-2 font-[800] text-center'>Limitless power of AI</h1>
  //       <p className='text-muted-foreground text-center text-sm md:text-md font-[300]'>Get the full experience of AI with Omni AI</p>
  //     </div>
  //     <div className='px-4 md:px-20 lg:px-32 flex flex-col md:gap-4 gap-2'>
  //       {tools.map((tool) => (
  //         <Card
  //           onClick={() => {router.push(tool.href)}}
  //           key={tool.href}
  //           className={`p-2 md:p-4 border-black/5 flex items-center justify-between cursor-pointer hover:shadow-md transition`}
  //         >
  //           <div className='flex items-center px-4'>
  //             <div className={`w-fit rounded-md ${tool.bgColor} p-2`}>
  //               <tool.icon className={`h-8 w-8 ${tool.color}`} />
  //             </div>
  //             <div className='px-4 text-sm md:text-lg font-[600] text-gray-800'>
  //               {tool.label}
  //             </div>
  //           </div>
  //             <div className='px-2'>
  //               <MoveRight className='h-5 w-5 md:w-6 md:h-6 text-black/70' />
  //             </div>
  //         </Card>
  //       ))}
  //     </div>
  //   </div>
  // )

  return (
    <div>
      {/* TODO: dashboard of user's logins and uses */}
      <h1>I want to user&apos;s dashboard </h1>
    </div>
  )
}

export default Dashboard