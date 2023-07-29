import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { LayoutDashboard, MessageSquare, FileImageIcon, VideoIcon, Music4Icon, Code2Icon, WrenchIcon, GalleryVerticalEndIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const routes = [
        {
            label: "Dashboard",
            icon: LayoutDashboard,
            href: "/dashboard",
            color: "text-cyan-400"
        },
        {
            label: "Conversation",
            icon: MessageSquare,
            href: "/conversation",
            color: "text-yellow-500"
        },
        {
            label: "Image Generation",
            icon: FileImageIcon,
            href: "/image",
            color: "text-green-500"
        },
        {
            label: "Video Generation",
            icon: VideoIcon,
            href: "/video",
            color: "text-pink-500"
        },
        {
            label: "Stable Diffusion",
            icon: GalleryVerticalEndIcon,
            href: "stable-diffusion",
            color: "text-cyan-500"
        },
        {
            label: "Music Generation",
            icon: Music4Icon,
            href: "/music",
            color: "text-violet-500"
        },
        {
            label: "Code Generation",
            icon: Code2Icon,
            href: "/code",
            color: "text-orange-500"
        },
        {
            label: "Settings",
            icon: WrenchIcon,
            href: "/settings",
        },
    ];
    
    const pathname = usePathname();

  return (
    <div className='py-5 space-y-4 flex flex-col text-white'>
        <div className='px-5 flex-1'>
            <Link href="/dashboard" className='flex items-center justify-start p-1 mb-14 w-min'>
                <div className='h-[2.5rem] w-[2.5rem] relative mr-4'>
                    <Image 
                        src={"/images/Logo.png" || "/public/images/Logo.png"}
                        fill
                        alt='logo'
                    />
                </div>
            </Link>
            <div className='space-y-2'>
                {routes.map(route => (
                    <Link
                        href={route.href}
                        key={route.href}
                        className={`p-3 flex group justify-start hover:bg-gray-300/10 rounded-lg transition ${pathname === route.href ? 'bg-gray-300/10 text-white' : 'text-gray-400'}`}
                    >
                        <div className='flex items-center flex-1'>
                            <route.icon className={`h-5 w-5 mr-3 ${route.color}`} />
                            {route.label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
</div>
  )
}

export default Sidebar