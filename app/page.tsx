'use client'
import React, { useEffect} from 'react'
import dynamic from "next/dynamic"
// import Loading from './loading'
import PackSection from '@/components/landing/PackSection'
import { MovingServices } from '@/components/landing/MovingServices'
import { Reviews } from '@/components/landing/Reviews'
import { Banner } from '@/components/landing/Banner'

const HeroSection = dynamic(
  () => import('@/components/landing/HeroSection'), {
    ssr: false
  }
)
import ServiceSection from '@/components/landing/ServiceSection'
// const ServiceSection = dynamic(() => import('@/components/landing/ServiceSection'), {
//   ssr: false
//   })
const Section3 = dynamic(() => import('@/components/landing/Section3'), {
  ssr: false
})
import Procedure from '@/components/landing/Procedure'
// const Procedure = dynamic(() => import('@/components/landing/Procedure'), {
//   ssr: false
//   })
import Faq from "@/components/landing/Faq";
// const Faq = dynamic(() => import('@/components/landing/Faq'), {
//   ssr: false
//   })
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