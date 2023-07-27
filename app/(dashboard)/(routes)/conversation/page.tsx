'use client'
import React, { useState } from 'react'
import Heading from '@/components/Heading'
import { Bot, MessageSquare } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod';
import { formSchema } from './constants'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { ChatCompletionRequestMessage } from 'openai'
import axios from 'axios'
import Empty from '@/components/Empty'
import Loader from '@/components/Loader'
import BotAvatar from '@/components/BotAvatar'
import UserAvatar from '@/components/UserAvatar'

const Conversation = () => {
  // const router  = useRouter();
  // const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     prompt:""
  //   }
  // });

  // const isLoading = form.formState.isSubmitting;

  // const handleSubmit = async (values: z.infer<typeof formSchema>) => {
  //   try {
  //     const userMessage: ChatCompletionRequestMessage = {
  //       role: "user",
  //       content: values.prompt,
  //     };
  //     const newMessages = [...messages, userMessage];

  //     const response = await axios.post("/api/conversation", {
  //       messages: newMessages,
  //     });

  //     setMessages((current) => [...current, userMessage, response.data]);

  //     form.reset();
  //   } catch (err: any) {
  //     // TODO: Open Pro Model
  //     console.log(err);
  //   } finally {
  //     router.refresh();
  //   }
  // }

  // return (
  //   <div className='pb-20'>
  //     <Heading
  //       title='Conversation'
  //       desc='Advanced conversation model'
  //       Icon={MessageSquare}
  //       iconColor='text-yellow-500'
  //       bgColor='bg-yellow-500/10'
  //     />
  //     <div className='md:px-4 lg:px-8 px-6'>
  //       <div>
  //         <Form
  //           {...form}
  //         >
  //           <form onSubmit={form.handleSubmit(handleSubmit)}
  //             className='rounded-lg border w-full p-2 md:p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
  //           >
  //             <FormField 
  //               name="prompt"
  //               render={({ field }) => (
  //                 <FormItem className='col-span-12 md:col-span-10'>
  //                   <FormControl>
  //                     <Input 
  //                       placeholder='What is the speed of light?'  
  //                       className='border-0 outline-none focus-visible:ring-0 text-black/80 focus-visible:ring-transparent' 
  //                       disabled={isLoading}
  //                       {...field}
  //                     />
  //                   </FormControl>
  //                 </FormItem>
  //               )}
  //             />
  //             <Button className='from-violet-600 to-pink-600 bg-gradient-to-r text-white col-span-12 md:col-span-2'>
  //               Generate
  //             </Button>
  //           </form>
  //         </Form>
  //       </div>
  //     </div>
  //     <div className='space-y-4 mt-4'>
  //       {isLoading && (
  //         <Loader />
  //       )}
  //       {messages.length === 0 && !isLoading && (
  //         <Empty 
  //           label='Start the conversation now!'
  //           />
  //       )}
  //       <div className='flex flex-col-reverse mt-10 gap-y-4'>
  //         {messages.map((msg) => (
  //           <div key={msg.content} className={`px-4 md:px-6 lg:px-8`}>
  //             <div className={`border p-4 rounded-lg flex ${msg.role === 'assistant' && 'bg-slate-100 border-slate-100'}`}>
  //               <div className={`flex items-center justify-center pl-4 pr-8`}>
  //                 {msg.role === 'user' ? <UserAvatar /> : <BotAvatar />}
  //               </div>
  //               <div className={`flex items-center justify-center`}>
  //                 {msg.content}
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // )

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, prompt: any) => {
    e.preventDefault();
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: prompt
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages
      })

      setMessages((current) => [...current, userMessage, response.data]);

    } catch (err) {
      console.log(err);
    } finally {
      router.refresh();
    }
  }

  return (
    <div className='pb-20'>
      <Heading 
        title='Conversation'
        desc='Ask Omni anything'
        Icon={MessageSquare}
        iconColor='text-yellow-500'
        bgColor='bg-yellow-500/10'
      />
      <div className='md:px-4 lg:px-8 px-6'>
        <div>
          <form 
            className='border w-full p-2 md:p-4 px-3 md:px-6 grid grid-cols-12 gap-2 rounded-lg'
            onSubmit={(e) => handleSubmit(e, messages)}
          >
            <input 
              type="text" 
              placeholder='What is the radius of Earth?' 
              className='outline-none text-black/80 w-full col-span-12 md:col-span-10 p-2'  
            />
            <button className='col-span-12 md:col-span-2 rounded-lg from-violet-600 bg-gradient-to-r to-pink-600 text-white font-[500] text-sm'>Generate</button>
          </form>
          <div className='space-y-4 mt-4'>
            loading
          </div>
          {messages.map((msg) => (
            <div key={msg.content} className='px-4 md:px-6 lg:px-8'>
              <div className={`${msg.role === 'assistant' && 'bg-slate-100 border-slate-100'}`}>
                <div>
                  {msg.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                </div>
                <div>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Conversation