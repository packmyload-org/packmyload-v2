import { Col, Row, Card, Button, Rate } from 'antd';
import React from 'react';
import aboutdata from './about-us.json';
import Link from 'next/link';

const AboutCard = ({ title, description }) => (
  <Col span={24} sm={12} md={8} lg={6} className="mb-7">
   <Card
  title={title}
  className="w-full md:w-[300px] lg:w-[400px] lg:h-[250px] bg-[#F4F3F0]"
  style={topBorderStyle}
>
  <p>{description}</p>
</Card>

  </Col>
);

const topBorderStyle = {
  borderTop: '8px solid #43BCFE',
  borderBottomRightRadius: '70px',
};


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
          <div className=" mx-auto  grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-center md:max-w-2xl lg:max-w-none pt-10">
            {aboutdata.map((item, index) => (
              <AboutCard key={index} title={item.title} description={item.description} />
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
