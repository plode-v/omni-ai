'use client'
import React, { lazy, useState } from 'react'
import Heading from '@/components/Heading'
import { Code2Icon, Divide } from 'lucide-react'
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
import ReactMarkdown from "react-markdown";

const CodePage = () => {
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

  //     const response = await axios.post("/api/code", {
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
  //       title='Code Generation'
  //       desc='Generate code in seconds'
  //       Icon={Code2Icon}
  //       iconColor='text-orange-500'
  //       bgColor='bg-orange-500/10'
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
  //                       placeholder='Generate a submit button using React Hooks'  
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
  //               <div className={`flex w-full`}>
  //                 {msg.role === 'user' ? <UserAvatar /> : <BotAvatar />}
  //                 <div className={`flex items-center w-full pl-4`}>
  //                   <ReactMarkdown 
  //                     components={{
  //                       pre:({ node, ...props}) => (
  //                         <div className='overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg'>
  //                           <pre {...props} />
  //                         </div>
  //                       ),
  //                       code:({ node, ...props}) => (
  //                         <code className='bg-black/10 p-1 rounded-sm' {...props}/>
  //                       )
  //                     }}
  //                     className='text-sm overflow-hidden leading-7'
  //                   >
  //                     {msg.content || ""}
  //                   </ReactMarkdown>
  //                 </div>
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
  const [prompt, setPrompt] = useState<string>("")


  const handleSubmit = async (e: any, prompt: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: prompt
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/code", {
        messages: newMessages
      })

      setMessages((current) => [...current, userMessage, response.data]);
      setPrompt("")
      setIsLoading(false);

    } catch (err) {
      console.log(err);
    } finally {
      router.refresh();
    }
  }

  return (
    <div>
      <Heading
        title='Code Generation'
        desc="Generate code in seconds"
        Icon={Code2Icon}
        iconColor='text-orange-500'
        bgColor='bg-orange-500/10'
      />
      <div className='px-4 md:px-4 lg:px-8'>
        <div>
          <form 
            onSubmit={(e) => handleSubmit(e, prompt)}
            className='rounded-lg border w-full p-2 md:p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'  
          >
            <div className='col-span-12 md:col-span-10'>
              <Input 
                placeholder='Write simple toggle button in React JS'
                className='border-0 outline-none focus-visible:ring-0 text-black/80 focus-visible:ring-transparent'
                disabled={isLoading}
                onChange={e => setPrompt(e.target.value)}
                value={prompt}
              />
            </div>
            <Button className='col-span-12 md:col-span-2 from-violet-600 to-pink-600 bg-gradient-to-r text-white'>Generate</Button>
          </form>
        </div>
      </div>
      <div className='space-y-4 mt-4'>
        {isLoading && (
          <Loader />
        )}
        {messages.length === 0 && !isLoading && (
          <Empty label='Start coding now'/>
        )}
        <div className='flex flex-col-reverse mt-10 gap-y-4'>
          {messages.map((msg) => (
            <div className='px-4 md:px-6 lg:px-8' key={msg.content}>
              <div className={`border p-4 rounded-lg overflow-auto ${msg.role === 'assistant' && 'bg-slate-100 border-slate-100'}`}>
                <div className='flex w-full'>
                  {msg.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                  <div className='flex items-center w-full px-4'>
                    <ReactMarkdown
                      components={{
                        pre:({ node, ...props }) => (
                          <div className='overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg'>
                            <pre {...props} />
                          </div>
                        ),
                        code:({ node, ...props }) => (
                          <code className='bg-black/10 p-1 rounded-sm' {...props} />
                        )
                      }}
                      className='text-sm overflow-hidden leading-7 break-words'
                    >
                      {msg.content || ""}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CodePage