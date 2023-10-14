"use client"
import React,{useEffect, useState} from 'react';
import { PaperPlaneRight } from '@phosphor-icons/react';
import Image from 'next/image'
import axios from 'axios'
interface Props {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setLaunch: React.Dispatch<React.SetStateAction<boolean>>;
  launch: boolean;
  start: boolean;
}

const ChatComponent: React.FC<Props> = ({setStart,setLaunch,launch,start}) => {
   const options = {
    url: `https://general-runtime.voiceflow.com/state/user/pizza-${Math.random()}/interact?logs=off`,
    headers: {
      accept: 'application/json',
      versionID: 'production',
      'content-type': 'application/json',
      Authorization: `${process.env.NEXT_PUBLIC_VOICE_FLOW_API_KEY}`
    },
    data: {
      action: {type: 'launch'},
      config: {
        tts: false,
        stripSSML: true,
        stopAll: true,
        excludeTypes: ['block', 'debug', 'flow']
      }
    }
  };
  const launchChat = async() => {
    const res = await axios.post(options.url, options.data, { headers: options.headers })
    console.log(res)
 }
 launchChat()
 
    const [chatText,setChatText] = useState<string>()
 return (
    <div className='fixed flex flex-col h-[90vh] lg:h-[83vh] lg:right-10 bottom-3 lg:bottom-10 w-[90dvw] sm:w-[80dvw] m-auto lg:w-[34dvw] bg-white z-40 shadow rounded-md '>
    <header className='bg-blue-300 w-full p-4 flex justify-between'>
      <div className='flex gap-4'>
        <Image
          src="/images/iconpackmyload.webp"
          alt="logo"
          width={30}
          height={30}
          className='w-[30px] h-[30px]'
          loading='lazy'
        />
        <h1 className='font-black text-lg text-white'>Mr. Packer</h1>
      </div>
      <button className='text-white' onClick={()=>setStart(!start)}>&#10006;</button>
    </header>
  
    <main className='overflow-y-scroll p-4 h-[calc(87vh-2rem-3rem)] lg:h-[calc(80vh-2rem-3rem)]'>
      <section className='flex w-full items-center flex-col justify-center'>
        <img
            src="/images/iconpackmyload.webp"
            alt="logo"
            className='w-[60px] h-[60px]'
            loading='lazy'
        />
        <h1 className='font-bold mt-2 text-xl'>Mr. Packer</h1>
        <p className='text-slate-400 mt-2 text-sm'>Our virtual assistant is here to help you.</p>
      </section>
    </main>
  
    <footer className='w-[90%] mx-auto border border-slate-300 rounded-sm flex bottom-2 justify-between fixed left-0 right-0'>
      <input
        type="text"
        placeholder='Message...'
        className='w-[90%] outline-none placeholder:text-base p-2'
        onChange={(e) => {setChatText(e.target.value)}}
      />
      {
        chatText &&
        <button className='px-2'>
            <PaperPlaneRight size={18} color="#2e5f9e" weight="fill" />
        </button>
      }
    </footer>
  </div>
  
 );
};

export default ChatComponent;
