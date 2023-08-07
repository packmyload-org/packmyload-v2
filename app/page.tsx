'use client'
import React, { useEffect } from 'react'
import HeroSection from '@/components/landing/HeroSection'
import ServiceSection from '@/components/landing/ServiceSection'
import Section3 from '@/components/landing/Section3'
import Procedure from '@/components/landing/Procedure'
import Faq from '@/components/landing/Faq'
import { useLoading } from '@/context/LoadingContext'
import Loading from '@/app/Loading'
function Home() {
  const { isLoading, setIsLoading } = useLoading()
  useEffect(() => {
    setIsLoading(false)
  },[])
  return(
    <div className='sm:mt-[5%] mt-[13%] w-full text-black'>
      {!isLoading ? (
      <>
      <HeroSection/>
      <ServiceSection/>
      <Section3/>
      <Procedure/>
      <Faq/> 
      </>
      ) : (
        // Render a loading spinner or skeleton components
        <Loading/>
        )}
        </div>
  )
}

export default Home