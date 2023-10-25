"use client";
import { Col, Row, Card } from "antd";
import { Coin, CreditCard, LightningSlash, SneakerMove } from "@phosphor-icons/react";

import React from "react";
import Image from "next/image";
import { AdServicesCard } from "@/components/landing/custom/AdServicesCard";

export default function Movers() {
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
                    Join Our Community of Expert Movers
                  </h3>
                  <h2 className=" text-lg mt-2">
                    Earn a stable income while working in your own time and
                    space.
                  </h2>
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
        <div className="w-full  h-auto py-20">
          <div className="flex flex-row md:grid-cols-3 lg:grid-cols-4   ">
            <img
              src="/images/partner/packmyload_1697583737398.webp"
              alt="image-1"
              className="w-[50%] max-h-96 relative bottom-20"
            />
            <img
              src="/images/about/packmyload_1696572694895.webp"
              alt="image-2"
              className="w-[50%] max-h-96 relative bottom-20"
            />
            <img
              src="/images/partner/packmyload_1697583683638.webp"
              alt="image-3"
              className="w-[50%] max-h-96   relative bottom-20"
            />
          </div>
          <div className="relative bottom-10 flex flex-col gap-4 ">
            <div className="flex flex-col gap-5 ml-6 lg:flex-row justify-between  max-w-6xl mx-auto">
              <div className="w-10/12 mx-auto lg:w-full h-full flex items-center">
                <Image
                  src="/images/partner/packmyload_1695798593791.webp"
                  alt="image-1"
                  loading="lazy"
                  className="w-auto h-auto mx-auto lg:mx-0 rounded-md object-cover pr-5 flex-grow"
                  width={600}
                  height={600}
                />
              </div>

              <div className=" w-[90%] flex flex-col justify-center ">
                <p className="text-2xl w-full font-semibold md:w-8/12 lg:text-4xl mt-4  mx-auto text-[#777674]">
                  Enjoy the flexibility of working independently, on your own
                  schedule.
                </p>
              </div>
            </div>

           
          </div>
        </div>
        <div className="w-full h-auto">
          <div className="grid grid-col justify-center">
            <h2 className="text-5xl font-bold pl-[400px] text-[#6D9ED2]">
              Earn a stable income
            </h2>
            <h3 className="text-2xl font-semibold px-80 pt-5 text-[#777674]  ">
              Receive work remotely, through our platfrom <br /> Choose your own
              working hours and become an entrepreneur
            </h3>
            <div className="pl-52">
              <div className="grid grid-rows  md:grid-cols-3 lg:grid-cols-4 gap-8 p-5 md:p-9  ">
                <AdServicesCard
                  Icon={<Coin size={24} color="#2E5F9E" weight="fill" />}
                  text="Earn a fixed salary "
                />

                <AdServicesCard
                  Icon={<CreditCard size={24} color="#2E5F9E" weight="fill" />}
                  text="Get paid after every job "
                />

                <AdServicesCard
                  Icon={<SneakerMove size={24} color="#2E5F9E" weight="fill" />}
                  text="Choose when to stop working "
                />
              </div>
            </div>
          </div>
          <div>
          <div className="grid grid-col justify-center">
            <h2 className="text-5xl font-semibold pl-16 text-[#6D9ED2] ">
            Who You Are
            </h2>
            <div className=" text-3xl mt-12 text-[#777674] ">
              <li>Ability to transport heavy items and furniture</li>
              <li>Customer service oriented</li>
              <li>Owns/ rents vans or trucks</li>
              <li>Located in one of our operating cities</li>
            </div>

            </div>

            <div className="mt-24 pl-9 " >

              <h2 className="text-3xl font-semibold text-[#6D9ED2] pl-[500px] ">How To Apply</h2>

              <div className="flex flex-row gap-8 text-2xl mt-6 text-[#777674] pl-[100px] ">
                <div>
                  <h2 className="text-[#6D9ED2]">STEP ONE</h2>
                  <p className="text-lg">Complete the questionnare below to get <br/>started</p>
                </div>
                <div>
                  <h2 className="text-[#6D9ED2]">STEP TWO</h2>
                  <p  className="text-lg">Schedule a call with the Packmyload team<br/> and tell us about yourself!</p>
                </div>
                <div>
                  <h2 className="text-[#6D9ED2]">STEP THREE</h2>
                  <p  className="text-lg">Complete training material and start<br/> getting paid for your work</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}
