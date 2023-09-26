import { Col, Row } from 'antd'
import React from 'react'
import { useRouter } from "next/navigation";
export default function Faq() {
  const router = useRouter()
  return (
   <section className="gradient-bg grid items-center py-[20px] min-h-[250px]">
   <div className="cirle-bg">
    <div className="bg object-cover" style={{height:'250px'}}></div>   
   </div>
   <div className="container py-12">
    <div className="join-wrap fl-wrap text-white">
     <Row className='w-full flex' justify={'space-between'} align={'middle'}>
      <Col span={24} md={10} className='flex flex-col space-y-6'>
       <h3 className='text-4xl font-bold'>Do You Have Questions ?</h3>
       <p>Check out our frequently asked questions.</p>
      </Col>
      <Col span={24} md={10} className='flex items-center text-start md:text-end justify-center min-h-[100px] '>
       <div className="join-wrap-btn bg-blue-700 focus:bg-blue-600" onClick={()=>router.push('/faqs')}>FAQs</div>
      </Col>
     </Row>
    </div>
   </div>
  </section>
  )
}
