'use client'
import { useRouter } from 'next/navigation';


interface About {
  title: string,
  description: string,
  to: string
 }

 export const AboutCard = ({ title, description, to }: About) => {
 const router = useRouter()
  return (
    <div className='flex flex-col sm:space-y-4 items-center lg:items-start w-full min-w-[230px] py-4 border-b-[0.3px] cursor-pointer' onClick={()=>router.push(to)}>
     <div className='w-full flex gap-2 items-center justify-center lg:justify-start'>
        <figure className='p-2 md:p-3 bg-[#f9f9f9] rounded-lg'>
         
        </figure>
        <h2 className='font-bold text-base md:text-xl text-[#2E5F9E]'>{title}</h2>
     </div>
     <div className='bg-blue-100 rounded py-[1px] w-[200px] mt-2' />
      <p className='text-[#777674] text-center lg:text-left text-sm w-4/5 mt-2'>{description}</p>
     </div>
 )
 }