'use client'
import React, { useEffect} from 'react'
import dynamic from "next/dynamic"
// import Loading from './loading'
import PackSection from '@/components/landing/PackSection'
import { Reviews } from '@/components/landing/Reviews'
import { Banner } from '@/components/landing/Banner'

const HeroSection = dynamic(
  () => import('@/components/landing/HeroSection'), {
    ssr: false
  }
)
import ServiceSection from '@/components/landing/ServiceSection'
const Section3 = dynamic(() => import('@/components/landing/Section3'), {
  ssr: false
})
import Procedure from '@/components/landing/Procedure'
import Faq from "@/components/landing/Faq";
import { ToastContainer } from 'react-toastify'
import { AdSection } from '@/components/landing/AdSection'
import { ServicesMarket } from '@/components/landing/ServicesMarket'
import { ProcedureCards } from '@/components/landing/ProcedureCards'
import SeemlessExperience from '@/components/landing/custom/SeemlessExperience'

  function Home() {
  useEffect(() => {
    localStorage.clear()
  }, [])
  return(
    <div className='w-full text-black'style={{marginTop: '130px'}}>
      <>  
          <HeroSection/>
          <AdSection />
          <ServicesMarket />
          <Banner />
          <ServiceSection />
          <SeemlessExperience/>
          {/* <StepCard /> */}
          <Section3/>
          <ProcedureCards/>
          <PackSection />
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