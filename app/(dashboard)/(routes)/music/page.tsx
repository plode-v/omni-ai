'use client'
import React, { useState } from 'react'
import Heading from '@/components/Heading'
import { Music4Icon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod';
import { formSchema } from './constants'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Empty from '@/components/Empty'
import Loader from '@/components/Loader'
import BotAvatar from '@/components/BotAvatar'
import UserAvatar from '@/components/UserAvatar'

const MusicPage = () => {

  const router = useRouter();
  const [music, setMusic] = useState<string>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {

      setMusic(undefined);

      const response = await axios.post("/api/music", values);

      setMusic(response.data.audio);

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
        title="Music Generation"
        desc="Create music anytime"
        Icon={Music4Icon}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
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
                        placeholder='Relaxing violin'
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
            <Loader label='Generating... This may take a while' />
          )}
        </div>
        {!music && !isLoading && (
          <Empty label='Generate music now'/>
        )}
        {music && (
          <div className='flex w-full h-full justify-center items-center mt-8'>
            <audio controls className='w-3/4'>
              <source src={music} />
            </audio>
          </div>
        )}
      </div>
    </div>
  )
}

export default MusicPage