"use client";
import { Col, Row, Card } from "antd";
import {
  Coin,
  CreditCard,
  LightningSlash,
  SneakerMove,
} from "@phosphor-icons/react";

import React from "react";
import Image from "next/image";
import { AdServicesCard } from "@/components/landing/custom/AdServicesCard";

export default function Movers() {
  return (
    <div className="flex justify-left min-h-screen bg-gray-100">
      <div className="w-full text-black" style={{ marginTop: "70px" }}>
        <section className="gradient-bg grid items-center py-[20px] h-[fit-content] ">
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
                <Col span={24} md={10} className="flex flex-col space-y-6">
                  <h3 className="text-2xl md:text-4xl font-bold">
                    Interstate Moves
                  </h3>
                  <h2 className=" text-lg mt-2">
                    Let us make your long distance move EASY. With mix and match
                    moving services like packing and storage, as well as moving
                    protection, unmatched customer service and some of the best
                    long distance moving company ratings in the country, you can
                    rest easy knowing you are in the hands of America’s Most
                    Trusted Moving Company.
                  </h2>
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <div className="w-full h-auto py-20 mt-2">
          <div className="relative bottom-10 flex flex-col gap-4 bg-[#EDF2F8] py-2">
            <div className="flex flex-col gap-5 md:flex-row justify-between max-w-6xl mx-auto">
              <div className="mx-auto w-full h-full flex items-center">
                <img
                  src="/images/partner/packmyload_1695798593791.webp"
                  alt="image-1"
                  loading="lazy"
                  className="w-full h-auto lg:h-[400px] mx-auto lg:mx-0 rounded-md object-cover flex-grow"
                />
              </div>

              <div className=" w-[90%] flex flex-col justify-center ">
                <h2 className="text-2xl font-semibold w-full  md:w-8/12  mt-4 px-2 lg:px-0 mx-auto text-[#6D9ED2]">
                  {" "}
                  Trusted Long Distance Moving Company
                </h2>
                <p className="text-base w-full  md:w-8/12  mt-4 px-2 lg:px-0 mx-auto text-[#777674]">
                  Packmyload has been providing customers with reliable and
                  professional long distance moving services for more than 5
                  years. For close to a decade of perfecting the interstate
                  moving process (from quote to move-in day), we understand what
                  customers need in order to have a great moving experience. We
                  strive to provide customers everything they need for a
                  successful move. This includes allowing you to build your own
                  move plan with customizable service options that meet your
                  needs, budget and schedule. We also include our basic Full
                  Value Protection option in every initial moving quote. We have
                  earned the reputation of Nigeria’s Most Trusted Moving Company
                  with the flexibility we offer to customers.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row justify-between max-w-6xl mx-auto">
              <div className=" w-[90%] flex flex-col justify-center ">
                <h2 className="text-2xl font-semibold w-full  md:w-8/12  mt-4 px-2 lg:px-0 mx-auto text-[#6D9ED2]">
                  {" "}
                  Interstate Moving Services
                </h2>
                <p className="text-base w-full  md:w-8/12  mt-4 px-2 lg:px-0 mx-auto text-[#777674]">
                  Whether you are moving just across state lines or across the
                  country, our interstate movers can help transport your
                  belongings to your new home with ease and simplicity!
                </p>

                <div>
                  <div className="">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 py-6 ">
                      <AdServicesCard
                        Icon={<Coin size={24} color="#2E5F9E" weight="fill" />}
                        text="Earn a fixed salary "
                      />

                      <AdServicesCard
                        Icon={
                          <CreditCard size={24} color="#2E5F9E" weight="fill" />
                        }
                        text="Get paid after every job "
                      />

                      <AdServicesCard
                        Icon={
                          <SneakerMove
                            size={24}
                            color="#2E5F9E"
                            weight="fill"
                          />
                        }
                        text="Choose when to stop working "
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto w-full h-full flex items-center">
                <img
                  src="/images/partner/packmyload_1695798593791.webp"
                  alt="image-1"
                  loading="lazy"
                  className="w-full h-auto lg:h-[400px] mx-auto lg:mx-0 rounded-md object-cover flex-grow"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-2 justify-center max-w-6xl mx-auto ">
          <img
            src="/images/partner/packmyload_1697583737398.webp"
            alt="image-1"
            className="w-[355px] h-[350px] relative bottom-20 object-cover"
          />
          <img
            src="/images/about/packmyload_1696572694895.webp"
            alt="image-2"
            className="w-[355px] h-[350px] relative bottom-20 object-cover"
          />
          <img
            src="/images/partner/packmyload_1697583683638.webp"
            alt="image-3"
            className="w-[355px] h-[350px] relative bottom-20 object-cover"
          />
        </div>
        <div className="w-full h-auto">
          <div className="flex flex-col max-w-6xl mx-auto px-2 lg:px-0">
            <h2 className="text-2xl md:text-4xl font-bold text-[#6D9ED2]">
              What is a Long Distance Move?
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold pt-5 text-[#777674]  ">
              ong distance moves are different than local moves (moving a short
              distance within a metro area within the same state) and intrastate
              moves (longer distance moves that occur within the same state)
              because they involve moving goods across state lines. A cross
              country move can also be referred to as a long distance move, an
              interstate move or a state-to-state move. No matter the distance,
              all moves that involve crossing a state line require special,
              federal authority. U.S. federal laws and regulations, including
              insurance requirements, are designed to protect consumers before,
              during and after their moves. It is important that you are able to
              distinguish reputable long distance moving companies from
              fraudulent or so-called “rogue” movers, who are often not really
              movers and have been known for holding personal property hostage
              for additional fees and other scams.
            </h3>
          </div>
          <div>
            <div className="grid grid-col max-w-6xl mx-auto px-2 lg:px-0">
              <h2 className="text-2xl md:text-4xl font-semibold text-[#6D9ED2] ">
                Types of Long Distance Moves
              </h2>
              <div className=" text-xl md:text-2xl mt-12 text-[#777674] ">
                <li>Ability to transport heavy items and furniture</li>
                <li>Customer service oriented</li>
                <li>Owns/ rents vans or trucks</li>
                <li>Located in one of our operating cities</li>
              </div>
            </div>

            <div className="mt-6 max-w-6xl mx-auto px-2 lg:px-0">
              <h2 className="text-2xl md:text-4xl font-semibold text-[#6D9ED2] ">
                How To Apply
              </h2>

              <div className="flex flex-col md:flex-row flex-wrap gap-6 text-xl md:text-2xl mt-6 text-[#777674] ">
                <div>
                  <h2 className="text-[#6D9ED2]">STEP ONE</h2>
                  <p className="text-lg">
                    Complete the questionnare below to get <br />
                    started
                  </p>
                </div>
                <div>
                  <h2 className="text-[#6D9ED2]">STEP TWO</h2>
                  <p className="text-lg">
                    Schedule a call with the Packmyload team
                    <br /> and tell us about yourself!
                  </p>
                </div>
                <div>
                  <h2 className="text-[#6D9ED2]">STEP THREE</h2>
                  <p className="text-lg">
                    Complete training material and start
                    <br /> getting paid for your work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
