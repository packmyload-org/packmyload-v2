'use client'
import Image from 'next/image'
import { useState } from 'react'
import ChatComponent from './chatComponent'
import { Chats } from '@phosphor-icons/react'
export default function Chat() {
  const [launch,setLaunch]= useState(true)
  const [start,setStart]= useState(false)
  return (
    <>
        {start ? <ChatComponent setLaunch={setLaunch} launch={launch} start={start} setStart={setStart}/> : (
    <div className="fixed bottom-2 right-4">
       <div className='relative border-[10px] border-blue-300 rounded-full p-2 flex flex-col items-center cursor-pointer' onClick={() => { setStart(true); setLaunch(false); }}>
        {/* <Image
          src='/images/icons/chats.svg'
          alt='chats icon'
          width={40}
          height={40}
          className="object-contain"
        /> */}
        <Chats size={52} weight="fill" color='#2E5F9E' />
      {launch &&
        <div className='absolute bg-white/20 w-[280px] right-full top-[-20%] mr-4'>
            <div className='w-full flex justify-end'>
              <p className='font-black text-blue-300 w-max text-lg cursor-pointer' onClick={()=>setLaunch(false)}>x</p>
            </div>
            <h1 className='text-base font-medium text-gray-800 w-max mx-2'>Hello there, My name is Mr.Packer,</h1>
            <h1 className='text-base font-medium text-gray-800 w-max  mx-2'>How can i assist you ?</h1>
        </div>
     }
      </div>
  </div>
    )}
   
   </>
 )
}