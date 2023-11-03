
import { Col, Row } from 'antd'
import Link from 'next/link'
import React from 'react'
export default function Faq() {
  return (
  <section className="relative gradient-bg grid py-[20px] min-h-[250px]">
  <div className="cirle-bg w-full">
    <div className="bg object-cover" style={{height:'250px'}} />   
  </div>
  <div className="w-full max-w-6xl mx-auto py-12">
    <div className="join-wrap fl-wrap text-white">
      <Row className='w-full flex' justify={'space-between'} align={'middle'}>
        <Col span={24} md={10} className='flex flex-col space-y-6'>
          <h3 className='text-4xl font-bold'>Do You Have Questions ?</h3>
          <p>Check out our frequently asked questions.</p>
        </Col>
        <Col span={24} md={10} className='flex items-center text-start md:text-end justify-center min-h-[100px]'>
            <Link href={'/Faqs'} className="join-wrap-btn bg-blue-700 focus:bg-blue-300 ">
              FAQs
            </Link>
        </Col>
      </Row>
    </div>
  </div>
  </section>
  )
}
