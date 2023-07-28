'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Heading from '@/components/Heading'
import { Download, FileImageIcon } from 'lucide-react'
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
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
import { Card, CardFooter } from '@/components/ui/card'

const ImagePage = () => {
  const router  = useRouter();
  const [photos, setPhotos] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "1",
      resolution: "256x256"
    }
  })

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setPhotos([]);

      const response = await axios.post("/api/image", data);

      const urls = await response.data.map((image: { url: string }) => image.url);

      setPhotos(urls)
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
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(handleSubmit)}
              className='rounded-lg border w-full p-2 md:p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
            >
              <FormField 
                name='prompt'
                render={({ field }) => (
                  <FormItem
                    className='col-span-12 lg:col-span-6'
                  >
                    <FormControl>
                      <Input
                        className='p-4 border-0 outline-none focus-visible:ring-0 text-black/80'
                        placeholder='A horse in the backyard'
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
                        {amountOptions.map((amount) => (
                          <SelectItem
                            key={amount.value}
                            value={amount.value}
                          >{amount.label}</SelectItem>
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
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button className='col-span-12 md:col-span-2 from-violet-600 to-pink-600 bg-gradient-to-r text-white' disabled={isLoading}>
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
        {photos.length === 0 && !isLoading && (
          <Empty 
            label='Start generating images now'
            />
        )}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8'>
          {photos.map((src) => (
            <Card
              key={src}
              className='rounded-lg overflow-hidden'
            >
              <div className='aspect-square relative'>
                <Image 
                  src={src}
                  alt='image'
                  fill
                />
              </div>
              <CardFooter className='p-2'>
              <Button 
                variant="secondary" 
                className='w-full'
                onClick={() => window.open(src)}  
              >
                  <Download className='h-4 w-4 mr-2' />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImagePage