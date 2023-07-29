import React from 'react'

interface EmptyProps {
    label: string;
}

const EmptyComponent = ({ label }: EmptyProps ) => {
    // TODO: add an image to the center of page when text is empty
    // FIXME: USE LOTTIE
  return (
    <div className="h-full items-center justify-center w-full flex flex-col mt-10">
        <h2 className='font-[600] capitalize'>
            {label}
        </h2>
    </div>
  )
}

export default EmptyComponent