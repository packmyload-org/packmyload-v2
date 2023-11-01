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
  const [chatText, setChatText] = useState<string>()
  const [chatData, setChatData] = useState<any[]>([])
  const id = `packer-${Math.random()}`
   const options = {
    url: `https://general-runtime.voiceflow.com/state/user/${id}/interact?logs=off`,
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
     },
  
  };
const launchChat = async () => {
  const res = await axios.post(options.url, options.data, { headers: options.headers });
  const data = {
    type: 'system',
    message: res.data.map((payload:any) => Array.isArray(payload.payload) ? payload.payload.map((p :any)=> p.message).join('/n') : payload.payload.message).join('/n')
  };
  setChatData([data]);
}

const sendChat = async (e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>) => {
  e.preventDefault()
  let user = { type: 'user', message: chatText }
  setChatData(prevChatData => [...prevChatData, user]);
  const text = {
  method: 'POST',
  url: 'https://general-runtime.voiceflow.com/state/user/${id}/interact',
  headers: {
    accept: 'application/json',
    versionID: 'production',
    'content-type': 'application/json',
    Authorization:  `${process.env.NEXT_PUBLIC_VOICE_FLOW_API_KEY}`
  },
  data: {
    action: {type: 'text', payload: user.message},
    config: {
      tts: false,
      stripSSML: true,
      stopAll: true,
      excludeTypes: ['block', 'debug', 'flow']
    }
  }
};

  setChatText('');
  const res = await axios.post(text.url, text.data, { headers: text.headers });
  const data = {
    type: 'system',
    message:''
  };
  console.log(res)
  data.message = res?.data[2]?.payload?.message;
   setChatData(prevChatData => [...prevChatData, data]);
}

  // useEffect(() => {
  //   launchChat()
  // },[])
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
  
    <main className='overflow-y-scroll scrollbar-hide p-4 h-[calc(87vh-2rem-3rem)] lg:h-[calc(75vh-2rem-3rem)]'>
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
      <section>
      {
      chatData.length ? chatData.map((data: any, index: number) => (
        <div key={index}>
          {
            data.type === 'system'
              ? data.message.includes('/n') ? data.message.split('/n').map((message: string, messageIndex: number) => (
                <div key={messageIndex}>
                  <p className='mt-1 bg-slate-300 rounded-md p-3 w-[fit-content]'>{message}</p>
                </div>
              )) : <p className='mt-1 bg-slate-300 rounded-md p-3 w-[fit-content]'>{data.message}</p>
              : 
              <div>
                <p className='mt-1 float-right bg-slate-200 rounded-md p-3 w-[fit-content]'>{data.message}</p> 
                <div className='clear-both' />
              </div>
          }
        </div>
      )): null
      }
      </section>
    </main>
  
    <form 
      className='w-[90%] absolute mx-auto border border-slate-300 rounded-sm flex bottom-2 justify-between fixed left-0 right-0 z-50'
      // onSubmit={sendChat}
    >
      <input
        type="text"
        placeholder='Message...'
        value={chatText}
        className='w-[90%] outline-none placeholder:text-base p-2'
        onChange={(e) => {setChatText(e.target.value)}}
      />
      {
        chatText &&
         <button
            className='px-2'
            // onClick={sendChat}
          >
            <PaperPlaneRight size={18} color="#2e5f9e" weight="fill" />
        </button>
      }
    </form>
  </div>
  
 );
};

export default ChatComponent;
