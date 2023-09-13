import { Col, Row } from 'antd'
import React from 'react'
import Image from 'next/image';
import aboutdata from './about-us.json'




const aboutItems = aboutdata.map((item,index) => (
  <div 
    className="flex flex-col limitless-card rounded relative cursor-pointer" 
    key={index}
  >
    
      <div className="relative w-full h-full overflow-hidden">
       
        <div className="absolute bottom-4 left-0 p-2 text-white text-xl font-bold">
          {item.title}
          <p >{item.description}</p>
        </div>
      </div>
    
  </div>
 

))

console.log(aboutdata);


export default function Home() {
  return (
    <div className="flex justify-left min-h-screen bg-gray-100 mt-1">
    <div className='w-full text-black'style={{marginTop: '64px'}}>
   <section className="gradient-bg grid items-center py-[20px] min-h-[250px]">
   <div className="cirle-bg ">
    <div className="bg object-cover" ></div>   
   </div>
   <div className="container py-12">
    <div className="join-wrap fl-wrap text-white">
     <Row className='w-full flex' justify={'space-between'} align={'middle'}>
      <Col span={24} md={10} className='flex flex-col space-y-6'>
       <h3 className='text-4xl font-bold'>About PackMyLoad</h3>
       <p>Check out our history, newsroom, and claims information , as well as opportunities to become  an agent, driver or employee </p>
      </Col>
      <Col span={24} md={10} className='flex items-center text-start md:text-end justify-center min-h-[160px] '>
       
      </Col>
     </Row>
    </div>
   </div>
  </section>

  <div>
    <div>
      <h1 className='text-3xl font-bold'>Learn more about PackMyLoad below </h1>

    </div>
    <div className=" mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-center md:max-w-2xl lg:max-w-none">
                {aboutItems}
            </div>                                        
  </div>
  </div>
  </div>
  )
}
