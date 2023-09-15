'use client'
import { Col, Row } from 'antd'
import React from 'react'
import Image from 'next/image'
import { Play } from '@phosphor-icons/react'

export default function Section3() {
  return (
  <section className="w-full py-[100px] bg-gray-200">
   <div className="container">
     <div className='gap-6 flex flex-col section-title'>
          <h2 className="w-full font-bold text-4xl text-center">We've got your back</h2>
          <span className="section-separator"></span>
          <p className='w-full text-center '>Browse through our services to find the one relevant to you.</p>
      </div>
      <div className="w-full">
       <Row className=' w-full mt-14 gap-4 lg:gap-6 px-[3%]' justify={'center'}>
       <Col span={24} lg={8} className='relative' >
       <div className="video-box fl-wrap w-full lg:mb-[20px]">
        <Image 
         src="https://res.cloudinary.com/packmyload/image/upload/v1563167345/moving-company-lagos-nigeria-packman1.png" 
         alt="alter"
          width={300}
          height={200}
          className='object-cover w-full'
          />
         <a className='flex justify-evenly items-center hover:animate-pulse w-[70px] p-[10px] border-[#c5c4c4] border-[10px] bg-blue-100 hover:bg-blue-600 absolute top-[40%] left-[45%] text-gray-100 font-bold rounded-full z-10 text-sm' href="https://www.youtube.com/watch?v=WHSjDa1zfyI">
          <Play size={32} color="#fefbfb" weight="fill" />
         </a>
       </div>
       </Col>
        <Col span={24} lg={8} className='min-h-[200px]  justify-center items-center section-title '>
        <div className='h-max mt-[20%] gap-4 flex flex-col'>
          <h2 className="w-[70%] font-bold text-4xl text-center">Strong Packmen</h2>
          <span className="section-separator"></span>
          <p className='w-[70%] text-center text-sm mx-auto '>Every Pack comes with strong professional packmen who are vetted for a 5-star experience. They will do the impossible to load, haul and deliver your items safely.</p>
        </div>
       </Col>
       </Row>
       <Row className=' w-full mt-16 lg:gap-0 p-0 lg:px-[3%]' justify={'center'}  gutter={[0,80]}>
       <Col span={20} className='process-itemkey'>
									<Image alt="moving company lagos nigeria truck sizes" src="/images/moving-company-lagos-nigeria-truck_large1.png" 
         width={700}
         height={700}
         className='object-contain w-full'
         />
       </Col>
       <Col span={20} className=' flex flex-col justify-center items-center section-title gap-4'>
          <h2 className="w-full font-bold text-4xl text-center">A truck for all your moving needs</h2>
          <p className='w-full text-center text-sm '>From Pickup Trucks to Cargo Vans and Sprinter Vans.</p>
       </Col>
       <Col span={24}>
        <Row className='w-full mb-11 ' gutter={[10,30]} justify={'space-between'}>
        <Col span={24} lg={6} className='min-h-[350px] min-w-[350px] flex text-center flex-col justify-center items-center section-title gap-4'>
         <div className='flex flex-col justify-center gap-3 items-center'>
          <Image src="/images/secure.svg" alt="moving company lagos nigeria secure feature " width={100} height={80} loading='lazy'/>
          <h3 className="banner-text">Protection</h3>
         </div>
          <span className="section-separator"></span>
          <p className='w-80%'>Each Move is backed by a Goods-in-transit insurance policy from the moment your items are in our hands.</p>
        </Col>
        <Col span={24} lg={6} className='min-h-[300px] min-w-[350px]  flex text-center flex-col justify-center items-center section-title gap-4'>
          <div className='flex flex-col justify-center gap-3 items-center'>
            <Image src="/images/ratetip.svg"alt="moving company lagos nigeria secure feature " width={100} height={80} loading='lazy'/>
            <h3 className="banner-text">Pay, rate & tip</h3>
         </div>
          <span className="section-separator"></span>
          <p className='w-80%'>When your Packing is complete you’ll be asked to rate your Packer with the option to tip them in the app for a job well done.</p>
        </Col>
        <Col span={24} lg={6} className=' min-h-[300px] min-w-[350px] flex text-center flex-col justify-center items-center section-title gap-4'>
        <div className='flex flex-col justify-center gap-3 w-full items-center'>
          <Image src="/images/calender.svg" alt="moving company lagos nigeria secure feature " width={100} height={80} loading='lazy'/>
          <h3 className="banner-text">30 mins or 30 days</h3>
         </div>
          <span className="section-separator"></span>
          <p className='w-80%'>Schedule your Pack ahead of time up to 30 days in advance or request on-demand and we’ll arrive in as little as 30 minutes.</p>
        </Col>
        </Row>
       </Col>
       </Row>
      </div>
   </div>
  </section>
  )
}
