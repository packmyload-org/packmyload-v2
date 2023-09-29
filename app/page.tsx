'use client'
import React, { useEffect} from 'react'
import PackSection from '@/components/landing/PackSection'
import { Reviews } from '@/components/landing/Reviews'
import { Banner } from '@/components/landing/Banner'
import HeroSection from '@/components/landing/HeroSection'
import ServiceSection from '@/components/landing/ServiceSection'

import Faq from "@/components/landing/Faq";
import Nav from '@/components/Nav'
import { ToastContainer } from 'react-toastify'
import { AdSection } from '@/components/landing/AdSection'
import { ServicesMarket } from '@/components/landing/ServicesMarket'
import { ProcedureCards } from '@/components/landing/ProcedureCards'
import SeemlessExperience from '@/components/landing/SeemlessExperience'
import { AnimatedWrapper } from '@/components/AnimatedWrapper'
import Footer from '@/components/Footer'


  function Home() {
  useEffect(() => {
    localStorage.clear()
  }, [])

  return(
    <div className='w-full text-black'style={{marginTop: '65px'}}>
      <>  
        <Nav />
        
        <AnimatedWrapper>
          <HeroSection/>
        </AnimatedWrapper>

        <AnimatedWrapper>
          <AdSection />
        </AnimatedWrapper>
        
        <AnimatedWrapper>
          <ProcedureCards/>
        </AnimatedWrapper>

        <AnimatedWrapper>
          <ServicesMarket />
        </AnimatedWrapper>


        <AnimatedWrapper>
          <Banner />
        </AnimatedWrapper>

        <AnimatedWrapper>
          <ServiceSection />
        </AnimatedWrapper>

        <AnimatedWrapper>  
          <SeemlessExperience/>
        </AnimatedWrapper>

        <AnimatedWrapper>  
          <PackSection />
        </AnimatedWrapper>

        <AnimatedWrapper>
          <Reviews />
        </AnimatedWrapper>

        <AnimatedWrapper>   
          <Faq /> 
        </AnimatedWrapper>
        <Footer /> 
        
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