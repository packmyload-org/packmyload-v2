import { Col, Row, Card, Button, Rate } from 'antd';
import React from 'react';
import aboutdata from './about-us.json';
import Link from 'next/link';


interface About {
  title: string,
  description: string,
  icon?: any,

 }
 const AboutCard = ({ title, description }: About) => (
  
    <div className='flex flex-col sm:space-y-4 items-center lg:items-start w-full min-w-[230px] py-4 border-b-[0.3px]'>
     <div className='w-full flex gap-2 items-center justify-center lg:justify-start'>
        <figure className='p-2 md:p-3 bg-[#f9f9f9] rounded-lg'>
         
        </figure>
        <h2 className='font-bold text-base md:text-xl text-[#2E5F9E]'>{title}</h2>
     </div>
     <div className='bg-blue-100 rounded py-[1px] w-[60px] mt-2' />
      <p className='text-[#777674] text-center lg:text-left text-sm w-4/5 mt-2'>{description}</p>
     </div>
   
 )


// interface About{
//   title: string;
//   description: string;
// }
// const AboutCard = ({ title, description }: About) => (
//   <Col xs={24} sm={12} md={8} lg={6} className="mb-7">
//     <Card
//       title={title}
//       className="w-full md:w-[300px] lg:w-[300px] sm:w-[90%] bg-[#F4F3F0]"
//       style={topBorderStyle}
//     >
//       <p>{description}</p>
//       <div className="learn-more-link">
//         <Link href="/learn_more" passHref>
//           <h1>Learn more {'<'}</h1>
//         </Link>
//       </div>
//     </Card>
//   </Col>
// );

// const topBorderStyle = {
//   borderTop: '8px solid #43BCFE',
//   borderBottomRightRadius: '70px',
// };


export default function Home() {
  return (
    <div className="flex justify-left min-h-screen bg-gray-100 mt-1">
      <div className="w-full text-black" style={{ marginTop: '24px' }}>
        <section className="gradient-bg grid items-center py-[20px] min-h-[250px]  ">
          <div className="cirle-bg">
            <div className="bg object-cover"></div>
          </div>
          <div className="container py-12">
            <div className="join-wrap fl-wrap text-white">
              <Row className="w-full flex" justify="space-between" align="middle">
                <Col span={24} md={10} className="flex flex-col space-y-6 ">
                  <h3 className="text-4xl font-bold">About PackmyLoad</h3>
                  <p>
                    Check out our history, newsroom, and claims information, as well as opportunities
                    to become an agent, driver, or employee
                  </p>

                  <div>
            
          <Link href='/book_a_move'  className='flex justify-evenly items-center hover:animate-pulse w-[130px] p-[8px] border-inherit/20 border-[6px] bg-blue-100 hover:bg-blue-600 hover:text-gray-100 text-white font-bold rounded-full text-xs '>
            BOOK NOW 
            {/* <span className='font-extrabold text-lg max-h-5 text-center flex justify-center items-center'>
              + 
            </span> */}
          </Link> 
        <div className='mt-5'>
                    <div className="star-ratings">
                      <Rate allowHalf defaultValue={5} />
                    </div>
                    </div>
                  </div>
                </Col>
                <Col span={24} md={10} className="flex items-center text-start md:text-end justify-center min-h-[160px]"></Col>
              </Row>
            </div>
          </div>
        </section>

        <div className='pl-12'>
          <div className='pt-14'>
            <h1 className="text-3xl font-bold">Learn more about PackMyLoad below</h1>
          </div>
          <div className='max-w-6xl mx-auto md:grid gap-4 md:gap-10 mt-4 lg:grid-cols-3 items-center p-2 sm:px-2'>
     
            {aboutdata.map((item, index) => (
              <AboutCard key={index} title={item.title} description={item.description}  />
            ))}
          </div>
        </div>
        <div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}
