import { Col, Row, Card } from "antd";

import React from "react";
import Image from 'next/image'

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
                  <h3 className="text-4xl font-bold">About Packmyload</h3>
                  <p>
                    Read more about our story and history to learn why we're
                    Africa's Most Trusted Moving Company
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
        <div className="w-full bg-[#012D40] h-auto py-20">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-5 ml-6 lg:flex-row justify-between  max-w-6xl mx-auto">
              <div className="w-10/12 mx-auto lg:w-full h-full flex items-center">
                <Image
                  src="/images/about/packmyload_1696572786359.webp"
                  alt="image-1"
                  loading="lazy"
                  className="w-auto h-auto mx-auto lg:mx-0 rounded-md object-cover pr-5 flex-grow"
                  width={600}
                  height={600}
                  />
              </div>

              <div className=" w-[90%] flex flex-col justify-center ">
                <p className="text-2xl w-full font-semibold md:w-8/12 lg:text-4xl mt-4 text-white mx-auto">
                  Who we are
                </p>

                <p className="text-sm mt-2 w-full md:w-8/12 mx-auto text-white">
                  Packmyload is a Nigerian based start up that matches supply
                  <br /> and demand in the moving and delivery industry through
                  an asset-light, proprietary tech solution. <br /> As
                  technology continues to bring us closer together, there is
                  still no modern solution
                  <br /> in Nigeria to deliver our most precious items to use in
                  an easy, trustworthy,
                  <br /> and seamless manner. There simply has to be a better
                  way… which is why MoveMate is <br /> building the most
                  advanced moving and
                  <br /> delivery ecosystem to answer this need. ‍
                </p>
              </div>
            </div>

            <div className="flex flex-col mr-6 lg:flex-row mt-4 pb-8 justify-between gap-5 md:shrink-0 max-w-6xl mx-auto">
              <div className="lg:pt-40 w-[90%] md:w-[70%] mx-auto lg:mx-0">
                <p className="text-2xl font-semibold lg:text-4xl  mt-4 text-white">
                  How it works
                </p>

                <p className="text-sm mt-2  text-white">
                  We offer a comprehensive, connected, and tech-driven solution
                  <br /> developed specifically for this industry. We look at a
                  customer holistically, <br />
                  seeking to understand their needs from end-to-end and
                  providing solutions for delivery, storage, and moving.
                  <br /> At the same time, we bring value to the entire customer
                  experience by providing our partners with modern and reliable
                  solutions through our integrated ecosystem.
                </p>
              </div>
              <div className="w-10/12 mx-auto lg:w-full h-full flex items-center">
              <Image
                src="/images/about/packmyload_1696572694895.webp"
                alt="image-2"
                loading="lazy"
                  className="w-auto h-auto mx-auto lg:mx-0 rounded-md object-cover pl-5 flex-grow"
                  width={600}
                  height={600}
              />
              </div >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
