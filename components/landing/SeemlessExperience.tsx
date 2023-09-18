import { User } from '@phosphor-icons/react'
import React from 'react'
import {seemlessData} from '@/utils/data'
import { SeemlessCard } from './custom/SeemlessCard'

export default function SeemlessExperience() {
  return (
   <section className='w-full flex flex-col text-center text-black'>
    <div className='max-w-6xl mx-auto px-4 sm:px-6 space-y-3 pt-[52px]'>
     <h1 className='text-2xl md:text-4xl font-bold text-[#2E5F9E]'>One seamless experience</h1>
     <p className='text-base lg:w-[830px] mx-auto md:text-lg text-[#777674]'>Our teams will treat your possessions like they would their own. ensuring that the greatest care and diligence is taken.</p>
    </div>
    <div className='max-w-6xl mx-auto md:grid gap-4 md:gap-10 mt-4 lg:grid-cols-3 items-center p-2 sm:px-2'>
     {/* Card Section  */}
        {
          seemlessData?.map(item => 
              <SeemlessCard key={item.heading} heading={item.heading} body={item.body} icon={item.icon}/>
            )
        }
    </div>
   </section>
  )
}



