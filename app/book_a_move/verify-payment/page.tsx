import React from 'react'
import { FadeLoader, MoonLoader } from 'react-spinners'
type Props = {}

export default function page({ }: Props) {
  let spin = true;
  return (
   <div className="w-full h-screen flex justify-center items-center">
    <div className='w-full flex flex-col items-center'>
        <MoonLoader
          color='#4bcbfe'
          loading={spin}
          className='w-[100px]'
          aria-label="Loading Spinner"
        />
        <p className='mt-4 text-lg font-bold text-gray-800'>Please wait while we verify your transaction.</p>
    </div>
   </div>
   )
}