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
    <div className='flex flex-col space-y-4 items-start w-full min-w-[230px] py-6 md:py-4 border-b-[0.3px] cursor-pointer' onClick={()=>router.push(to)}>
     <div className='w-full flex gap-2 items-center justify-start'>
        <h2 className='font-bold text-base md:text-xl text-[#2E5F9E]'>{title}</h2>
     </div>
     <div className='bg-blue-100 rounded py-[1px] w-[190px] mt-2' />
      <p className='text-[#777674] text-left text-sm w-4/5 mt-2'>{description}</p>
     </div>
 )
 }