"use client"
import React, { useEffect, useState } from 'react';
import PackSection from '@/components/landing/PackSection';
import { Reviews } from '@/components/landing/Reviews';
import { Banner } from '@/components/landing/Banner';
import HeroSection from '@/components/landing/HeroSection';
import ServiceSection from '@/components/landing/ServiceSection';
import Faq from "@/components/landing/Faq";
import Nav from '@/components/Nav';
import { ToastContainer } from 'react-toastify';
import { AdSection } from '@/components/landing/AdSection';
import { ServicesMarket } from '@/components/landing/ServicesMarket';
import { ProcedureCards } from '@/components/landing/ProcedureCards';
import SeemlessExperience from '@/components/landing/SeemlessExperience';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import Footer from '@/components/Footer';
import Script from 'next/script';
import Loading from './loading';
import Chat from '@/components/chat/chat';

function Home() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';
  const [isLoaded, setIsLoaded] = useState(false);
  // const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    localStorage.clear();
    // if (document.getElementById('google-maps-api')) {
    //   setIsLoaded(true);
    // }

    //   setTimeout(() => {
    //     setShowChat(true); // Show the Chat component after 40 seconds
    //   }, 10000); // 40 seconds in milliseconds
    
  }, []);

  return (
    
    <div className='w-full min-h-full relative text-black' style={{ marginTop: '65px' }}>
      <Script id='google-maps-api' src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${'places'}`} strategy="lazyOnload"
        async={true} onLoad={() => setIsLoaded(true)} />
      {!isLoaded ? <Loading /> :
        <>
          <Nav />

          <AnimatedWrapper>
            <HeroSection />
          </AnimatedWrapper>

          <AnimatedWrapper>
            <AdSection />
          </AnimatedWrapper>

          <AnimatedWrapper>
            <ProcedureCards />
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
            <SeemlessExperience />
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
{/* 
          {showChat && <Chat />}  */}
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

      }
    </div>
  );
}

export default Home;
