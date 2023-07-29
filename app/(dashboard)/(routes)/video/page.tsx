'use client'
import React, { useState } from 'react'
import Heading from '@/components/Heading'
import { VideoIcon } from 'lucide-react'
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
import { Slider } from '@/components/ui/slider'


const VideoPage = () => {

  // TODO: Add more configurations on stable diffusion

  const router = useRouter();
  const [video, setVideo] = useState();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {

      setVideo(undefined)

      const response = await axios.post("/api/video", values);

      setVideo(response.data);
      console.log(response.status);

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
        title="Video Generation"
        desc="Generate videos from a prompt"
        Icon={VideoIcon}
        iconColor='text-pink-500'
        bgColor='bg-pink-500/10'
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
                        placeholder='A cat in the middle of the woods'
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
        {!video && !isLoading && (
          <Empty label='Generate Awesome Stable Diffusion now'/>
        )}
        {video && (
          <div className='flex w-full h-full justify-center items-center mt-8'>
            <video controls className='mt-8'>
              <source src={video} />
            </video>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoPage