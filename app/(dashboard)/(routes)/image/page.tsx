'use client'
import React, { useState } from 'react'
import Heading from '@/components/Heading'
import { FileImageIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod';
import { formSchema, amountOptions, resolutionOptions } from './constants'
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
import ReactMarkdown from "react-markdown";
import { Select, SelectTrigger, SelectContent, SelectGroup, SelectItem, SelectValue, SelectLabel } from '@/components/ui/select'

const ImagePage = () => {
  const router  = useRouter();
  const [images, setImages] = useState<string[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt:"",
      amount: "1",
      resolution: "256x256"
    }
  });

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setImages([]);

      const response = await axios.post("/api/image", values);

      const urls = response.data.map((image: {url : string}) => {
        image.url;
      })

      form.reset();
    } catch (err: any) {
      // TODO: Open Pro Model
      console.log(err);
    } finally {
      router.refresh();
    }
  }

  return (
    <div className='pb-20'>
      <Heading
        title='Image Generation'
        desc='Create custom images in seconds'
        Icon={FileImageIcon}
        iconColor='text-green-500'
        bgColor='bg-green-500/10'
      />
      <div className='md:px-4 lg:px-8 px-6'>
        <div>
          <Form
            {...form}
          >
            <form onSubmit={form.handleSubmit(handleSubmit)}
              className='rounded-lg border w-full p-2 md:p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
            >
              <FormField 
                name="prompt"
                render={({ field }) => (
                  <FormItem className='col-span-12 md:col-span-6'>
                    <FormControl>
                      <Input 
                        placeholder='A white cat playing with brown dogs'  
                        className='border-0 outline-none focus-visible:ring-0 text-black/80 focus-visible:ring-transparent' 
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField 
                name='amount'
                control={form.control}
                render={({ field }) => (
                  <FormItem className='col-span-12 lg:col-span-2'>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map(option => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField 
                name='resolution'
                control={form.control}
                render={({ field }) => (
                  <FormItem className='col-span-12 lg:col-span-2'>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map(option => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button className='from-violet-600 to-pink-600 bg-gradient-to-r text-white col-span-12 md:col-span-2'>
                Generate
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className='space-y-4 mt-4'>
        {isLoading && (
          <Loader />
        )}
        {images.length === 0 && !isLoading && (
          <Empty 
            label='Start generating images now'
            />
        )}
        <div>
          Images will be rendered here
        </div>
      </div>
    </div>
  )
}

export default ImagePage