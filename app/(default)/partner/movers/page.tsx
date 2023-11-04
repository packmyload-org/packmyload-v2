"use client";
import { Col, Row, Card } from "antd";
import { Coin, CreditCard, LightningSlash, SneakerMove } from "@phosphor-icons/react";

import React from "react";
import Image from "next/image";
import { AdServicesCard } from "@/components/landing/custom/AdServicesCard";
import Link from "next/link";

export default function Movers() {
  return (
    <div className="flex justify-left min-h-screen bg-gray-100">
      <div className="w-full text-black" style={{ marginTop: "70px" }}>
        <section className="gradient-bg grid items-center py-[20px] lg:py-[5px] h-[fit-content] ">
          <div className="cirle-bg">
            <div className="bg object-cover"></div>
          </div>
          <div className="container py-12 max-w-6xl">
            <div className="join-wrap fl-wrap text-white">
              <Row
                className="w-full flex"
                justify="space-between"
                align="middle"
              >
                <Col span={24} md={15} className="flex flex-col space-y-6">
                  <h3 className="text-2xl md:text-4xl font-bold">
                    Join Our Community of Expert Movers
                  </h3>
                  <h2 className=" text-lg mt-2">
                    Earn a stable income while working in your own time and
                    space.
                  </h2>
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <div className="w-full h-auto mt-8">
          <div className="flex flex-row flex-wrap gap-2 justify-center max-w-6xl mx-auto ">
            <img
              src="/images/partner/packmyload_1697583737398.webp"
              alt="Moving Company in lagos & abuja: Packing Items by Packmen"
              className="w-[355px] h-[350px] relative object-cover"
            />
            <img
              src="/images/about/packmyload_1696572694895.webp"
              alt="Moving Company in lagos & abuja: Packing Items by Packmen"
              className="w-[355px] h-[350px] relative object-cover"
            />
            <img
              src="/images/partner/packmyload_1697583683638.webp"
              alt="Moving Company in lagos & abuja: Packing Items by Packmen"
              className="w-[355px] h-[350px] relative object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 bg-[#EDF2F8] py-2 mt-6 md:px-1">
            <div className="flex flex-col gap-5 md:flex-row justify-between max-w-6xl mx-auto">
              <div className="mx-auto w-full h-full flex items-center">
                <img
                  src="/images/partner/packmyload_1695798593791.webp"
                  alt="Moving Company in lagos & abuja: Packing Items by Packmen"
                  loading="lazy"
                  className="w-full h-auto lg:h-[400px] mx-auto lg:mx-0 rounded-md object-cover flex-grow"
                />
              </div>

              <div className=" w-[90%] flex flex-col justify-center ">
                <p className="text-2xl w-full font-semibold lg:text-4xl mt-4 px-2 lg:px-0 mx-auto text-[#777674]">
                  Enjoy the flexibility of working independently, on your own
                  schedule.
                </p>
              </div>
            </div>

           
          </div>
        </div>
        <div className="w-full h-auto bg-[#F9F9F9] py-6 md:px-1">
          <div className="flex flex-col max-w-6xl mx-auto px-2 lg:px-0">
            <h2 className="text-2xl md:text-4xl font-bold text-[#6D9ED2]">
              Earn a stable income
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold pt-5 text-[#777674]">
              Receive work remotely, through our platfrom <br /> Choose your own
              working hours and become an entrepreneur
            </h3>
            <div className="">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 py-6 ">
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
          <div className="grid grid-col max-w-6xl mx-auto px-2 lg:px-0">
            <h2 className="text-2xl md:text-4xl font-semibold text-[#6D9ED2] ">
            Who You Are
            </h2>
            <div className=" text-xl md:text-2xl mt-12 text-[#777674] ">
              <li>Ability to transport heavy items and furniture</li>
              <li>Customer service oriented</li>
              <li>Owns/ rents vans or trucks</li>
              <li>Located in one of our operating cities</li>
            </div>

            </div>

            <div className="mt-6 max-w-6xl mx-auto px-2 lg:px-0" >

              <h2 className="text-2xl md:text-4xl font-semibold text-[#6D9ED2] ">How To Apply</h2>

              <div className="flex flex-col md:flex-row flex-wrap gap-6 text-xl md:text-2xl mt-6 text-[#777674] ">
                <div>
                  <h2 className="text-[#6D9ED2]">STEP ONE</h2>
                  <p className="text-lg">Complete the questionnare <span  > <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf4QpJHzgXC3fojoCgsKR2-VHrRgs6YM0GBankwRneAlP9Juw/viewform?vc=0&c=0&w=1&flr=0" className="text-[#6D9ED2]">
                 here
              </Link></span> to get <br/>started</p>
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
