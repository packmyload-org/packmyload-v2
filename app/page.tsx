'use client'
import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic"
import { useGoogleMaps } from '@/context/GoogleMapsContext'
import Loading from './loading'
import { useInputPlaceContext } from '@/hooks/useInputPlaceContext-hook'
import AppToast from '@/components/alerts/AppToast'
// import StepCard from '@/components/landing/custom/StepCard'
import PackSection from '@/components/landing/PackSection'
import { MovingServices } from '@/components/landing/MovingServices'
import { Reviews } from '@/components/landing/Reviews'
import { Banner } from '@/components/landing/Banner'

const HeroSection = dynamic(
  () => import('@/components/landing/HeroSection'),
  { ssr: false }
)
const ServiceSection = dynamic(() => import('@/components/landing/ServiceSection'),
  {ssr: false})
const Section3 = dynamic(() => import('@/components/landing/Section3'),
   {ssr: false})
const Procedure= dynamic(()=>import('@/components/landing/Procedure'),
   {ssr: false})
const Faq = dynamic(() => import('@/components/landing/Faq'),
  { ssr: false })
  function Home() {
  const { isLoaded, loadError } = useGoogleMaps()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (!isLoaded) {
      setLoading(!loading)
    }
    setLoading(false)
    localStorage.clear()
  }, [])
  
    if (loading) {
      return <Loading/>
    }
  return(
    <div className='w-full text-black'style={{marginTop: '130px'}}>
      <>  
          <HeroSection/>
          <Banner />
          <ServiceSection/>
          {/* <StepCard /> */}
          <Section3/>
          <MovingServices />
          <PackSection />
          <Procedure/>
          <Reviews />
          <Faq/> 
      </>
     
        </div>
  )
}

export default Home