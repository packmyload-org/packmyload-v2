'use client'
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import { Col, Row, Card } from "antd";
import React from "react";
import Link from 'next/link'

export default function Partnerpage() {
  return (
    <div className="flex justify-left min-h-screen bg-gray-100 relative">
      <div className="w-full text-black" style={{ marginTop: "70px" }}>
        <AnimatedWrapper>

          <section className="gradient-bg grid items-center py-[5px] h-[fit-content] ">
            <div className="cirle-bg">
              <div className="bg object-cover"></div>
            </div>
            <div className="container py-12 max-w-6xl">
              <div className="join-wrap fl-wrap text-white">
                <Row
                  className="w-full flex items-center"
                  justify="space-between"
                  align="middle"
                >
                  <Col span={24} md={12} className="flex flex-col space-y-6">
                    <h3 className="text-2xl lg:text-4xl font-bold mt-4 md:mt-0">
                      Become a Business Partner
                    </h3>
                    <p >
                      Find out how your business can benefit by partnering with
                      Packmyload.
                    </p>
                  </Col>
                  <Col
                    span={24}
                    md={10}
                    className="flex items-center text-start md:text-end justify-center min-h-[160px]"
                  ></Col>
                </Row>
              </div>
            </div>
          </section>
        </AnimatedWrapper>
  
        <div>
          <div className="w-full bg-[#012D40] h-auto ">
            <AnimatedWrapper>
            
              <div className="absolute w-full top-[200px] md:top-[280px] lg:top-[300px] p-2 mt-6 md:mt-0">
                <section className=" max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-evenly gap-2 flex-wrap">
                  <div className="w-[90%] md:w-auto">
                    <Card
                      className="w-[100%] md:w-80 lg:w-[330px] lg:h-[fit-content] opacity-80"
                      style={{ backgroundColor: "#F4FAFA" }}
                      title="Business & Retail"
                    >
                      <ul>
                        <li>Furniture companies</li>
                        <li>Big Box Stores</li>
                        <li>Any other business that needs to move large items</li>
                      </ul>
                    </Card>
                  </div>
                  <div className="w-[90%] md:w-auto">
                    <Card
                      className="w-[100%] md:w-80 lg:w-[330px] lg:h-[fit-content] opacity-80 md:py-3"
                      style={{ backgroundColor: "#F4FAFA" }}
                      title="Integrations & Lead Monetization"
                    >
                      <ul>
                        <li>Prop-tech</li>
                        <li>Property Managers</li>
                        <li>Storage Companies</li>
                      </ul>
                    </Card>
                  </div>
                  <div className="w-[90%] md:w-auto">
                  <Card
                    className="w-[100%] md:w-80 lg:w-[330px] lg:h-[fit-content] opacity-80 md:py-3"
                    style={{ backgroundColor: "#F4FAFA" }}
                    title="Transportation & Logistics"
                  >
                    <ul>
                      <li>Logistics Companies</li>
                      <li>Courier Services</li>
                      <li>Transportation Providers</li>
                    </ul>
                  </Card>

                  </div>
                </section>
              </div>
            </AnimatedWrapper>
            <div>
            <AnimatedWrapper>
          
              <div className="w-full flex flex-col gap-5 md:flex-row justify-between mx-auto pt-[28rem] lg:pt-[14rem] md:max-w-6xl md:px-1">
                <img
                  src="/images/partner/packmyload_1695798527485.webp"
                  alt="image-1"
                  loading="lazy"
                  className="w-[100%] h-auto md:w-[50%] md:h-auto lg:w-[670px] lg:h-[550px] md:mx-auto lg:mx-0 lg:rounded-md object-cover "
                />
                <div className="flex flex-col md:justify-center w-[90%] md:w-[50%] lg:w-auto mx-auto lg:mx-0 md:p-1 lg:p-0">
                  <p className="text-2xl lg:text-4xl mt-4 text-white">
                    Business & Retail
                  </p>

                  <li className="text-base  text-white">
                    Residential moves (apartments, homes, condos)
                  </li>
                  <li className="text-base  text-white">
                    Moving belongings into storage
                  </li>
                  <li className="text-base  text-white">
                    One-off deliveries (piece of furniture)
                  </li>

                  <p className="text-base text-white">
                    Packmyload can manage your business delivery logistics for{" "}
                    <br /> you. If you deliver large items to you clients but
                    you don’t <br /> want to waste time managing the moves.
                  </p>
                </div>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper>
          
              <div className="flex flex-col md:flex-row mt-4 justify-between mx-auto gap-5 md:shrink-0 max-w-6xl mx-auto ">
                <div className="flex flex-col md:justify-center w-[90%] md:w-[50%] lg:w-auto mx-auto lg:mx-0 md:px-1">
                  <p className="text-2xl lg:text-4xl mt-4 text-white">
                    Integration & Lead Monetization
                  </p>

                  <li className="text-base  text-white">
                    Residential moves (apartments, homes, condos)
                  </li>
                  <li className="text-base  text-white">
                    Moving belongings into storage
                  </li>
                  <li className="text-base  text-white">
                    One off deliveries (piece of furniture)
                  </li>

                  <p className="text-base  text-white">
                  {" "}You don’t have to be in the space to be a part of the moving{" "}
                    <br /> and delivery ecosystem. If you have leads and users
                    that <br /> move often, you can get a commission for each
                    user you send <br /> us our way.
                  </p>
                </div>
                <img
                  src="/images/partner/packmyload_1695798593791.webp"
                  alt="image-2"
                  loading="lazy"
                  className="w-[100%] h-auto md:w-[50%] md:h-auto lg:w-[670px] lg:h-[550px] mx-auto lg:mx-0 md:rounded-md object-cover"
                />
              </div>
          </AnimatedWrapper>
            </div>
          </div>

          <div className="w-[90%] h-auto md:w-[75%]  lg:w-full mx-auto bg-[#fff] mt-6 mb-6 6xl:mb-0">
            <div className="bg-[#76DAE2] max-w-3xl mx-auto flex justify-end items-center relative rounded-xl py-6">
              <button
                className="w-full h-full p-6 text-xl font-bold rounded-xl flex flex-col md:flex-row justify-between items-center hover:bg-opacity-100 focus:outline-none hover: transition duration-300"
                // style={{ backgroundColor: '#76DAE2', borderRadius: '50px' }} 
              >
                <div className="flex items-center">
                  <div className="w-6 h-6  flex justify-center items-center transform transition-transform duration-300">
                    &nbsp;
                  </div>
                  
                  <span className=" text-[#2E5F9E] text-2xl lg:text-4xl   mt-4 ">{" "}Talk To A<br/> Representative{" "}</span>
                  
                </div>
                <Link href ="/contact">
                  <div
                    className="w-10 h-10 mx-auto md:mx-0 md:w-16 md:h-16 md:mt-6 bg-white rounded-full flex justify-center text-[#2E5F9E] items-center transform transition-transform duration-300 hover:translate-x-2"
                  >
                    &rarr;
                  </div>
                </Link>
              </button>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
}
