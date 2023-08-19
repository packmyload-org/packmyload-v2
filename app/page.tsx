'use client'
import React, { useEffect } from 'react'
import dynamic from "next/dynamic"

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