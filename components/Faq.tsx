import { Col, Row } from 'antd'
import React from 'react'

export default function Faq() {
  return (
   <section className="gradient-bg relative py-[50px]">
   <div className="cirle-bg ">
    <div className="bg object-contain" ></div>   
   </div>
   <div className="container py-12">
    <div className="join-wrap fl-wrap text-white">
     <Row className='w-full' justify={'space-between'} align={'middle'}>
      <Col span={24} md={10} className='flex flex-col gap-10'>
       <h3 className='text-3xl font-bold'>Do You Have Questions ?</h3>
       <p>Check out our frequently asked questions.</p>
      </Col>
      <Col span={24} md={10} className='flex flex-col items-start md:items-end justify-center min-h-[160px] '>
       <a href="/Faqs" className="join-wrap-btn hover:bg-blue-600">FAQs</a>
      </Col>
     </Row>
    </div>
   </div>
  </section>
  )
}
