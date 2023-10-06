import React from 'react';
import { PaperPlaneRight } from '@phosphor-icons/react';

interface Props {
}

const ChatComponent: React.FC<Props> = () => {
 return (
    <div className='fixed h-[90vh] lg:h-[83vh] lg:right-10 bottom-3 lg:bottom-10 w-[90dvw] sm:w-[80dvw] m-auto lg:w-[34dvw] bg-white z-40 shadow rounded-md '>
    <header className='bg-blue-300 w-full p-4 flex justify-between'>
      <div className='flex gap-4'>
        <img
          src="/images/iconpackmyload.png"
          alt="logo"
          className='w-[30px] h-[30px]'
          loading='lazy'
        />
        <h1 className='font-black text-lg text-white'>Mr. Packer</h1>
      </div>
      <button className='text-white'>&#10006;</button>
    </header>
  
    <main className='overflow-y-scroll p-4 h-[calc(87vh-2rem-3rem)] lg:h-[calc(80vh-2rem-3rem)]'>
      <section className='flex w-full items-center flex-col justify-center'>
        <img
            src="/images/iconpackmyload.png"
            alt="logo"
            className='w-[60px] h-[60px]'
            loading='lazy'
        />
        <h1 className='font-bold mt-2 text-xl'>Mr. Packer</h1>
        <p className='text-slate-400 mt-2 text-sm'>Our virtual assistant is here to help you.</p>
      </section>
    </main>
  
    <footer className='absolute w-full flex flex-col justify-center bottom-2 fixed left-0 right-0'>
      <input
        type="text"
        placeholder='Message...'
        className='w-[90%] mx-auto border border-slate-300 outline-none rounded-md placeholder:text-base p-2'
      />
    </footer>
  </div>
  
 );
};

export default ChatComponent;
