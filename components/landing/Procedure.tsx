'use client'
import { Row ,Col, Grid} from 'antd'
import React from 'react'
import Image from 'next/image'
const {useBreakpoint} = Grid
export default function Procedure() {
  const {sm} = useBreakpoint()
  return (
  <section className="w-full py-[100px]">
   <div className="container">	
					<Row  className='w-[60%]' justify={'center'} >
						<Image src="/images/packmyload-request-move.png" alt='responsive pix'  width={612} height={250} className='w-full object-contain'/>
					</Row>
					<Row  className='w-full flex-col text-center' justify={'center'} >
						<h3 id="about-font2"  className='text-[#42556B]'>Book a move</h3>
						<p id="about-font2" className='text-[#7d93b2]'>Tell us what you are moving, your pickup address and destination, 
						to get a free quote. Pick a moving day and time convenient for you</p>
					</Row>
					<Row className='w-[50%]' justify={sm ? 'end':'center'}>
						<Image src="/images/packmyload-truck-on-road.png" alt='res pix' width={200} height={100}className='w-full object-contain'/>
					</Row>
				
					<Row  className='w-full text-center' justify={'center'} gutter={[0,10]}>
						<Col span={24} md={12}>
							<h3 id="about-font2" className='text-[#42556B]'>Sit back and relax</h3>
							<p id="about-font2" className='text-[#7d93b2]'>We've got you covered. Our packers will arrive, handle, 
							organize and load your items securely into our van. Trust that 
							we will arrive at your destination in no time</p>
						</Col>
						<Col span={24} md={12}>
							<Image alt="responsivePix" src="/images/packmyload-covers-move.png" width={339} height={192} className='w-full object-contain'/>
						</Col>
					</Row>
				
				
					<Row className='w-[50%]' justify={sm ? 'end':'center'}>
						<Image src="/images/packmyload-truck-on-road2.png" alt='responsivePix' width={339} height={192} className='w-full object-contain'/>
					</Row>
				
					<Row  className='w-full text-center' justify={'center'} gutter={[0,10]}>
						<Col span={24} md={12}>
							<Image alt="responsivePix" src="/images/packmyload-rate-and-review.png" width={339} height={192} className='w-full object-cover' unoptimized/>
						</Col>
						<Col span={24} md={12}>
							<h3 id="about-font2" className='text-[#42556B]'>Rate and review</h3>
							<p id="about-font2" className='text-[#7d93b2]'>We bring beauty to handling, securing and organizing your 
							items just where you need them. Share your moving experience with us 
							by writing a review and rating us</p>
						</Col>
					</Row>
					</div>
   </section>
  )
}
