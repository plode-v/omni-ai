'use client'
import React from 'react'
import Heading from '@/components/Heading'
import { MessageSquare } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod';
import { formSchema } from './constants'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Conversation = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt:""
    }
  });

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <div>
      <Heading
        title='Conversation'
        desc='Advanced conversation model'
        Icon={MessageSquare}
        iconColor='text-yellow-500'
        bgColor='bg-yellow-500/10'
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
                  <FormItem className='col-span-12 md:col-span-10'>
                    <FormControl className=''>
                      <Input 
                        placeholder='How many days until new year?'  
                        className='border-0 outline-none focus-visible:ring-0 text-black/80 focus-visible:ring-transparent' 
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
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
    </div>
  )
}

export default Conversation