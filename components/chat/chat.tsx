'use client'
import { useState } from 'react'
import ChatComponent from './chatComponent'
import { Chats } from '@phosphor-icons/react'
import {usePathname} from 'next/navigation'

export default function Chat() {
  const [launch,setLaunch]= useState(true)
  const [start,setStart]= useState(false)


    return (
      <>
        {!start ?
      <div className="fixed bottom-2 right-4 z-30 ">
        <div className='bg-blue-700 rounded-full p-3 flex flex-col items-center relative cursor-pointer'>
          <Chats size={32} weight="duotone" color='#fff' onClick={() => { setStart(true); setLaunch(false); }} />
        {launch &&
          <div className='absolute bg-white shadow w-max right-full mr-3 rounded-md p-1'onClick={()=>setLaunch(false)}>
              <h1 className='text-sm font-medium text-gray-800 w-fit  mx-auto'>Need help? chat with Mr. packer</h1>
          </div>
        }
        </div>
      </div> :
        <ChatComponent setLaunch={setLaunch} launch={launch} setStart={setStart} start={start} />
      }
     </>
   )
  }