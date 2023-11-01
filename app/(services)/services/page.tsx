'use client'
import React from 'react';
import Faq from '@/components/landing/Faq';
import dynamic from 'next/dynamic';
import Loading from '@/app/loading';
const Services = dynamic(()=>import('@/components/services/Services'),{loading: ()=> <Loading/>,}) ;

export default function Service() {

    return (
    <section style={{marginTop: '100px'}}>
      <Services />
      <Faq />
    </section>
  );
}
