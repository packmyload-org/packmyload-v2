import { Col, Row, Card } from "antd";

import React from "react";


export default function OurStory() {
  return (
    <div className="flex justify-left min-h-screen bg-gray-100 mt-1">
      <div className="w-full text-black" style={{ marginTop: "24px" }}>
        <section className="gradient-bg grid items-center py-[20px] min-h-[250px] ">
          <div className="cirle-bg">
            <div className="bg object-cover"></div>
          </div>
          <div className="container py-12">
            <div className="join-wrap fl-wrap text-white">
              <Row
                className="w-full flex"
                justify="space-between"
                align="middle"
              >
                <Col span={24} md={10} className="flex flex-col space-y-6">
                  <h3 className="text-4xl font-bold">
                    About Packmyload
                  </h3>
                  <p >
                  Read more about our story and history to learn why we're Africa's Most Trusted Moving Company
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
        <div className="w-full bg-[#012D40] h-auto ">
            <div className="absolute w-full top-[200px] md:top-[285px] lg:top-[300px] p-2">
             
            </div>
            <div>
              <div className="flex flex-col gap-5 ml-6 lg:flex-row justify-between pt-64 max-w-6xl mx-auto md:pt-[330px] lg:pt-96">
                <img
                  src="/public/images/about/packmyload_1696572786359.webp"
                  alt="image-1"
                  loading="lazy"
                  className="w-[90%] h-auto md:w-[70%] md:h-auto lg:w-[670px] lg:h-[550px] mx-auto lg:mx-0 rounded-md object-cover "
                />

                
                <div className="lg:pt-40 w-[90%] md:w-[70%] lg:w-auto mx-auto lg:mx-0">
                  <p className="text-2xl lg:text-4xl mt-4 text-white">
                    Who we are
                  </p>

                  <p className="text-base  text-white">Packmyload is a Nigerian based start up that matches supply<br /> and demand in the moving  and delivery industry through an asset-light, proprietary tech solution. <br /> As technology continues to bring us closer together, there is still no modern solution<br /> in Canada to deliver our most precious items to use in an easy, trustworthy,<br /> and seamless manner. There simply has to be a better way… which is why MoveMate is <br /> building the most advanced moving and<br /> delivery ecosystem to answer this need.
‍</p>

                 
                </div>
              </div>

              <div className="flex flex-col mr-6 lg:flex-row mt-4 justify-between gap-5 md:shrink-0 max-w-6xl mx-auto">
                <div className="lg:pt-40 w-[90%] md:w-[70%] lg:w-auto mx-auto lg:mx-0">
                  <p className="text-2xl lg:text-4xl  mt-4 text-white">
                    How it works
                  </p>

                  <p className="text-base  text-white">We offer a comprehensive, connected, and tech-driven solution<br /> developed specifically for this industry. We look at a customer holistically, <br />seeking to understand their needs from end-to-end and providing solutions for delivery, storage, and moving.<br /> At the same time, we bring value to the entire customer experience by providing our partners with modern and reliable solutions through our integrated ecosystem.

</p>

                 
                </div>
                <img
                  src="/public/images/about/packmyload_1696572786359.webp"
                  alt="image-2"
                  loading="lazy"
                  className="w-[95%] h-auto md:w-[75%] md:h-auto lg:w-[670px] lg:h-[550px] mx-auto lg:mx-0 rounded-md object-cover pl-5"
                />
              </div>
            </div>
          </div>


        </div>
        </div>
  )
};