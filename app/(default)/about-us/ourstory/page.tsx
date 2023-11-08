import { Col, Row } from "antd";
import React from "react";

export default function OurStory() {
  return (
    <div className="flex justify-left min-h-screen bg-gray-100">
      <div className="w-full text-black" style={{ marginTop: "70px" }}>
        <section className="gradient-bg flex flex-col items-center py-[20px] lg:py-[5px] h-[fit-content]">
          <div className="cirle-bg">
            <div className="bg object-cover"></div>
          </div>
          <div className="container py-12 max-w-6xl">
            <div className="join-wrap fl-wrap text-white">
              <Row
                className="w-full flex items-center"
              >
                <Col span={24} md={10} className="flex flex-col space-y-6">
                  <h3 className="text-2xl md:text-4xl font-bold">About Packmyload</h3>
                  <p>
                    Read more about our story and history to learn why we're
                    Africa's Most Trusted Moving Company
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <div className="w-full bg-[#012D40] h-auto py-20">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-5 md:flex-row justify-between max-w-6xl mx-auto">
              <div className=" mx-auto w-full h-full">
                <img
                  src="/images/about/packmyload_1696572786359.webp"
                  alt="Moving Company in lagos & abuja: Packing Items by Packmen"
                  loading="lazy"
                  className="w-full h-auto mx-auto lg:mx-0 rounded-md object-cover flex-grow"
                  />
              </div>

              <div className=" w-[100%] md:w-[90%] flex flex-col justify-center px-2 ">
                <p className="text-2xl w-full font-semibold lg:text-4xl mt-4 text-white mx-auto">
                  Who we are
                </p>

                <p className="text-sm mt-2 w-full mx-auto text-white">
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

            <div className="flex flex-col md:flex-row mt-4 justify-between gap-5 md:shrink-0 max-w-6xl mx-auto">
              <div className="flex flex-col md:justify-center w-[100%] md:w-[90%] px-2 mx-auto lg:mx-0">
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
              <div className="mx-auto w-full h-full flex items-center">
              <img
                src="/images/about/packmyload_1696572694895.webp"
                alt="Moving Company in lagos & abuja: Packing Items by Packmen"
                loading="lazy"
                  className="w-auto w-full h-auto mx-auto lg:mx-0 rounded-md object-cover flex-grow"
              />
              </div >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
