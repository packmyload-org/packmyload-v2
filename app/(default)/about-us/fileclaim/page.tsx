import { Col, Row, Card } from "antd";
import Link from "next/link";
import React from "react";

export default function Leaders() {
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
                  <h3 className="text-4xl font-bold">File A Moving Claim</h3>
                  <p>
                    We are here to help! Let us help you with your claim, from
                    start to finish.
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
        <div className="w-full h-auto ">
          <div className="grid grid-col px-10 py-7 ">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#6D9ED2]">
                For a recently completed household move with Packmyload:
              </h1>
              <Link href="/contact">
                <p className="text-[#6D9ED2]">Click here to submit a claim</p>
              </Link>
              <p className=" md:text-xl  pt-5 text-[#777674]  ">
                If you need assistance, please call +234-806-475-0663 <br />
                Note: If your claim is for a move within the state of Lagos,
                please contact your Packmyload agent to request the appropriate
                form.
              </p>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#6D9ED2]">
                For claims for other types of moves, click one of the below:
              </h1>

              <p>
                <Link
                  href={
                    "https://docs.google.com/forms/d/e/1FAIpQLScAyYSpObaVywgkcBo_zKZ6II5XYB59CyVL55uylkcTd6_PJA/viewform?embedded=true"
                  }
                >
                  <li>Interstate Moves</li>
                </Link>
                <li>Logistics Shipment</li>
                <li>Government Move</li>
                <li>Offices Move</li>
              </p>

              <p className=" md:text-xl pt-5 text-[#777674]  ">
                Note: The military requires that documentation for items lost
                and/or damaged in shipments moving through the Defense Personal
                Property System (DPS) be reported through DPS. Information on
                how to file your claim can be found on the official DPS portal.
                To log in and begin the process of submitting your claim, you
                must have the Government Bill of Lading (GBL) number for your
                shipment, as well as your Electronic Transportation Acquisition
                (ETA) login.
              </p>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#6D9ED2]">
                Avoiding Claims:
              </h1>

              <p className=" md:text-xl  pt-5 text-[#777674]  ">
                We have several measures in place designed to protect your
                belongings in case of accidental loss or damage. Please ensure
                that you have a full understanding of how our basic Full-Value
                Protection plan and High Value Inventory Form work in order to
                protect yourself and your belongings in the event of the
                unexpected. We also provide additional protection options above
                and beyond our basic Full-Value Protection plan and High Value
                Inventory Form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
