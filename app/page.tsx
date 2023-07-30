import React from 'react'
import HeroSection from '@/components/landing/HeroSection'
import ServiceSection from '@/components/landing/ServiceSection'
import Section3 from '@/components/landing/Section3'
import Procedure from '@/components/landing/Procedure'
import Faq from '@/components/Faq'
function Home() {
  return (
    <div className='sm:mt-[5%] mt-[13%] w-full text-black'>
      <HeroSection/>
      <ServiceSection/>
      <Section3/>
      <Procedure/>
      <Faq/>
    </div>
  )
}

export default Home