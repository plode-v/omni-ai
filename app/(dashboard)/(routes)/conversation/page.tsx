'use client'
import React, { useState } from 'react'
import Heading from '@/components/Heading'
import { MessageSquare } from 'lucide-react'
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

  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessages: ChatCompletionRequestMessage = {role: "user", content: values.prompt}
      const newMessages = [...messages, userMessages];

      const response = await axios.post('/api/conversation', {
        messages: newMessages
      });

      setMessages((current) => [...current, userMessages, response.data]);

      form.reset();
    } catch (err: any) {
      console.log(err);
    } finally {
      router.refresh();
    }
  }

  return (
    <div className='pb-20'>
      <Heading 
        title="Conversation"
        desc="Ask Omni anything"
        Icon={MessageSquare}
        iconColor='text-yellow-500'
        bgColor='bg-yellow-500/10'
      />
      <div className='px-4 md:px-6 lg:px-8'>
        <div>
          <Form {...form}>
            <form 
              className='grid grid-cols-12 gap-2 rounded-lg w-full p-4 px-3 md:px-6 focus-within:shadow-sm border'
              onSubmit={form.handleSubmit(handleSubmit)}  
            >
              <FormField 
                name='prompt'
                render={({ field }) => (
                  <FormItem className='col-span-12 md:col-span-10'>
                    <FormControl>
                      <Input 
                        className='text-black/80 border-0 outline-none focus-visible:ring-0'
                        placeholder='What is the radius of the Earth'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className='col-span-12 md:col-span-2 from-violet-600 to-pink-600 bg-gradient-to-r text-white'>
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div>
          {isLoading && (
            <Loader label='Generating' />
          )}
        </div>
        {messages.length === 0 && !isLoading && (
          <Empty label='Start the conversation now'/>
        )}
        <div className='flex flex-col-reverse gap-y-4 mt-5'>
          {messages.map((msg) => (
            <div key={msg.content} className={`p-8 w-full flex gap-x-8 rounded-lg border-slate-500/10 border ${msg.role === 'assistant' && 'bg-slate-500/5 border-0'}`}>
              {msg.role === "user" ? <UserAvatar /> : <BotAvatar />}
              <p className='text-sm md:text-md'>
                {msg.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Conversation