import { BookingLayout } from "../BookingLayout";
import Image from 'next/image';
export default function Next_Page() {
 const leftContent = (
   <div className="p-1 lg:px-4 my-auto h-[45vh] w-full contact-bg">
     {/* <Image 
        src='/images/hero-img.jpg'
        alt='Page background image'
         width={100}
        height={80}
        className='w-full h-[45vh]'
      /> */}
    </div>
 )
  const rightContent = (
    <div className="p-1 lg:px-4 my-auto w-full"> 
       <div className='w-[90%] mx-auto py-4 space-y-1'>
        <div className='flex bg-blue-200 w-full'>
           <p>Send Me A Mail</p>
         </div>
       </div>
    </div>
  )
 return <BookingLayout leftContent={leftContent} rightContent={rightContent} stepDescription="Have Our Agent Contact You." textDescription="Sometimes, life's too busy to fill forms. Opt for a hassle-free experience – let our agents contact you swiftly." prev='/book_a_move'/>
}