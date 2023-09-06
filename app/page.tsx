'use client'
import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic"
import { useGoogleMaps } from '@/context/GoogleMapsContext'
import Loading from './loading'
import { useInputPlaceContext } from '@/hooks/useInputPlaceContext-hook'
// import StepCard from '@/components/landing/custom/StepCard'
import PackSection from '@/components/landing/PackSection'
import { MovingServices } from '@/components/landing/MovingServices'
import { Reviews } from '@/components/landing/Reviews'
import { Banner } from '@/components/landing/Banner'

const HeroSection = dynamic(
  () => import('@/components/landing/HeroSection'), {
    loading: () => <Loading />,
    ssr: false
  }
)
const ServiceSection = dynamic(() => import('@/components/landing/ServiceSection'), {
    loading: ()=> <Loading/>
  })
const Section3 = dynamic(() => import('@/components/landing/Section3'), {
    loading: ()=> <Loading/>
  })
const Procedure= dynamic(()=>import('@/components/landing/Procedure'), {
    loading: ()=> <Loading/>
  })
const Faq = dynamic(() => import('@/components/landing/Faq'), {
    loading: ()=> <Loading/>
  })
import { ToastContainer } from 'react-toastify'

  function Home() {
  useEffect(() => {
    localStorage.clear()
  }, [])
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
        <Faq /> 
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            closeOnClick={false}
            rtl={false}
            draggable
            pauseOnFocusLoss
            theme="light"
          />
      </>
     
        </div>
  )
}

export default Home