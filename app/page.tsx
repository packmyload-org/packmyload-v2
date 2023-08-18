'use client'
import React, { useEffect } from 'react'
import HeroSection from '@/components/landing/HeroSection'
import ServiceSection from '@/components/landing/ServiceSection'
import Section3 from '@/components/landing/Section3'
import Procedure from '@/components/landing/Procedure'
import Faq from '@/components/landing/Faq'
function Home() {
 
  return(
    <div className='w-full text-black'style={{marginTop: '130px'}}>
      <>
      <HeroSection/>
      <ServiceSection/>
      <Section3/>
      <Procedure/>
      <Faq/> 
      </>
     
        </div>
  )
}

export default Home