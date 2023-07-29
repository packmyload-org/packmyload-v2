import React from 'react'
import HeroSection from '@/components/landing/HeroSection'
import ServiceSection from '@/components/landing/ServiceSection'
function Home() {
  return (
    <div className='sm:mt-[5%] mt-[13%] w-full text-black'>
      <HeroSection/>
      <ServiceSection/>
    </div>
  )
}

export default Home