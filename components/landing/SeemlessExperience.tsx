import React from 'react'
import { Col } from 'antd'
import Image from 'next/image'

export default function SeemlessExperience() {
  return (
   <section className='w-full md:flex flex-col text-center text-black hidden lg:block'>
    <div className='max-w-6xl mx-auto px-4 sm:px-6 space-y-3 pt-[52px]'>
     <h1 className='text-2xl md:text-4xl font-bold text-[#2E5F9E]'>One seamless experience</h1>
     <p className='text-base lg:w-[75%] mx-auto md:text-lg text-[#777674]'>Our teams will treat your possessions like they would their own. ensuring that the greatest care and diligence is taken.</p>
    </div>
    <div className='max-w-6xl mx-auto flex flex col md:flex-row flex-wrap gap-4 md:gap-10 mt-10 items-center p-2 sm:px-2 space-y-10'>

        <Col span={20} lg={6} className='min-w-[350px] text-center mx-auto section-title gap-4 flex flex-col items-center'>
         <div className='flex flex-col justify-center gap-5 items-center'>
          <Image src="/images/secure.svg" alt="moving company lagos & Abuja nigeria secure feature " width={100} height={80} loading='lazy'/>
          <h3 className="banner-text">Protection</h3>
         </div>
          <span className="section-separator"></span>
          <p className=''>Each Move is backed by a Goods-in-transit insurance policy from the moment your items are in our hands.</p>
        </Col>
        <Col span={20} lg={6} className='min-w-[350px] text-center mx-auto section-title gap-4 gap-4 flex flex-col items-center'>
          <div className='flex flex-col justify-center gap-5 items-center'>
            <Image src="/images/ratetip.svg"alt="moving company lagos & Abuja nigeria ratetip feature " width={100} height={80} loading='lazy'/>
            <h3 className="banner-text">Pay, rate & tip</h3>
         </div>
          <span className="section-separator"></span>
          <p className=''>When your Packing is complete you’ll be asked to rate your Packer with the option to tip them in the app for a job well done.</p>
        </Col>
        <Col span={20} lg={6} className='min-w-[350px] mx-auto text-center section-title gap-4 gap-4 flex flex-col items-center'>
        <div className='flex flex-col justify-center gap-5 w-full items-center'>
          <Image src="/images/calender.svg" alt="moving company lagos & Abuja nigeria calender feature " width={100} height={80} loading='lazy'/>
          <h3 className="banner-text">30 mins or 30 days</h3>
         </div>
          <span className="section-separator"></span>
          <p className=''>Schedule your Pack ahead of time up to 30 days in advance or request on-demand and we’ll arrive in as little as 30 minutes.</p>
        </Col>
    </div>
   </section>
  )
}



