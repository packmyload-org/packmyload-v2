import { User } from '@phosphor-icons/react'
import React from 'react'

type Props = {
 heading: string,
 body: string,
 icon: any,
}

export default function SeemlessExperience() {
  return (
   <section className='w-full flex flex-col text-center text-black'>
    <div className='max-w-6xl mx-auto px-4 sm:px-6 space-y-3 pt-[52px] mb-14'>
     <h1 className='text-4xl font-bold'>One seemless experience</h1>
     <p className='text-lg leading-4 text-[#777674]'>Our teams will treat your possessions like they would their own. <br/> ensuring that the greatest care and diligence is taken.</p>
    </div>
    <div className='max-w-6xl mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-center'>
     {/* Card Section  */}
      <Card heading='Test' body='testing ahshsfj.gj.ng.djvnjsjnjdnfisirpojrom kldjpsjgj sjkg pijdgl.gmngoidh rihnda.fsfh;gjdg slfhhrhd;odgnergi fshenlrjgnd ' icon={<User size={24}/>}/>
    </div>
   </section>
  )
}


function Card({heading,body, icon}: Props) {
  return (
   <div className='flex flex-col items-center space-y-4 w-full min-w-[230px] py-6 border-b-[1px] border-black'>
    <div className='w-full flex gap-2 items-center'>
       <figure className='p-3 bg-[#f9f9f9] rounded-lg'>
        {icon} 
       </figure>
       <h2 className='font-semibold text-xl'>{heading}</h2>
     </div>
    <div className='bg-blue-100 rounded py-[1px] w-2/5 mx-auto' />
     <p className='text-[#777674] text-sm leading-5'>{body}</p>
    </div>
  )
}
