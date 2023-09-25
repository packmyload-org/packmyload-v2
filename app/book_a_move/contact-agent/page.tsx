'use client'
import { Envelope, PhoneCall, WhatsappLogo } from "@phosphor-icons/react";
import { BookingLayout } from "../BookingLayout";
export default function Next_Page() {
 const leftContent = (
   <div className="p-1 lg:px-4 my-auto h-[45vh] w-full contact-bg">
   
    </div>
 )
  const rightContent = (
    <div className="p-1 lg:px-4 my-auto w-full"> 
       <div className='w-[90%] px-4 mx-auto py-4 space-y-1'>
        <div className='flex justify-evenly items-center cursor-pointer bg-blue-200 hover:bg-blue-300 w-full ring-black hover:ring-2 px-3 py-4 rounded-md'>
            <Envelope size={56} weight="fill" className='text-inherit' />
           <p className='text-lg font-bold  w-[60%] text-start text-black hover:text-white'>Send Me A Mail</p>
        </div>
        <div className='flex justify-evenly items-center cursor-pointer bg-blue-200 hover:bg-blue-300 w-full hover:ring-2 px-3 py-4 rounded-md'>
            <PhoneCall size={56} weight="fill" className='text-inherit' />
           <p className='text-lg w-[60%]  font-bold text-start text-black hover:text-white'>Phone Call</p>
        </div>
        <div className='flex justify-evenly items-center cursor-pointer bg-blue-200 hover:bg-blue-300 w-full hover:ring-2 px-3 py-4 rounded-md'>
            <WhatsappLogo size={56} weight="fill" className='text-inherit' />
           <p className='text-lg w-[60%]  font-bold text-start text-black hover:text-white'>What'sApp Message</p>
        </div>
       </div>
    </div>
  )
 return <BookingLayout leftContent={leftContent} rightContent={rightContent} stepDescription="Have Our Agent Contact You." textDescription="Sometimes, life's too busy to fill forms. Opt for a hassle-free experience – let our agents contact you swiftly." prev='/book_a_move'/>
}