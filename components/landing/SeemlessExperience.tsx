import { User } from '@phosphor-icons/react'
import React from 'react'
import {seemlessData} from '@/utils/data'
import { SeemlessCard } from './custom/SeemlessCard'

export default function SeemlessExperience() {
  return (
   <section className='w-full flex flex-col text-center text-black'>
    <div className='max-w-6xl mx-auto px-4 sm:px-6 space-y-3 pt-[52px] mb-14'>
     <h1 className='text-4xl font-bold'>One seemless experience</h1>
     <p className='text-lg leading-4 text-[#777674]'>Our teams will treat your possessions like they would their own. <br/> ensuring that the greatest care and diligence is taken.</p>
    </div>
    <div className='max-w-6xl mx-auto grid gap-4 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 items-center p-5 sm:px-2'>
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



