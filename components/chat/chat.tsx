'use client'
import { useState } from 'react'
import ChatComponent from './chatComponent'
import { Chats } from '@phosphor-icons/react'
import {usePathname} from 'next/navigation'

export default function Chat() {
  const pathname = usePathname()

  const [launch,setLaunch]= useState(true)
  const [start,setStart]= useState(false)

  const renderChatBot = pathname.startsWith('/move')

  if(renderChatBot){
    return null
  }
  else {

    return (
      <>
        {!start ?
      <div className="fixed bottom-2 right-4 z-30">
        <div className='relative border-[10px] border-blue-300 rounded-full p-2 flex flex-col items-center cursor-pointer' onClick={() => { setStart(true); setLaunch(false); }}>
          <Chats size={46} weight="fill" color='#2E5F9E' />
        {launch &&
          <div className='absolute bg-white shadow w-[280px] right-full top-[-20%] mr-4 rounded-md p-1'>
              <div className='w-full flex justify-end'>
                <p className='font-black text-blue-300 w-max text-lg cursor-pointer' onClick={()=>setLaunch(false)}>&#10006;</p>
              </div>
              <h1 className='text-base font-medium text-gray-800 w-max mx-2'>Hello there, My name is Mr.Packer,</h1>
              <h1 className='text-base font-medium text-gray-800 w-max  mx-2'>How can i assist you ?</h1>
                </div>
        }
        </div>
      </div>:
        <ChatComponent setLaunch={setLaunch} launch={launch} setStart={setStart} start={start} />
      }
     </>
   )
  }
}