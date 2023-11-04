import { Col, Row, Card } from "antd";
import Link from "next/link";
import React from "react";

export default function Leaders() {
  return (
    <div className="flex justify-left min-h-screen bg-gray-100">
      <div className="w-full text-black" style={{ marginTop: "70px" }}>
        <section className="gradient-bg grid items-center py-[20px] lg:py-[5px]h-[fit-content] ">
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
                  <h3 className="text-2xl md:text-4xl font-bold">File A Moving Claim</h3>
                  <p>
                    We are here to help! Let us help you with your claim, from
                    start to finish.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <div className="w-full h-auto ">
          <div className="grid grid-col px-4 md:px-0 py-7 max-w-6xl mx-auto">
            <div>
              <h1 className="text-2xl font-bold text-blue-300 py-6">
                For a recently completed household move with Packmyload:
              </h1>
              <Link href="/contact">
                <p  className=" text-base leading-8 text-[#777674]  ">Click here to submit a claim</p>
              </Link>
              <p className="text-base leading-8 text-[#777674]  ">
                If you need assistance, please call +234-700-722-5776 
                <Link href="/terms">
                <p  className=" text-base leading-8 text-[#777674]  "> Note: Before you file a claim please go through the Terms and Conditions</p>
              </Link> . Afterwards,please contact your Packmyload agent to request the appropriate
                form.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-300 py-6">
                For claims for other types of moves, click one of the below:
              </h1>

              <p className="mt-3" >
                <Link
                  href={
                    "https://docs.google.com/forms/d/e/1FAIpQLScAyYSpObaVywgkcBo_zKZ6II5XYB59CyVL55uylkcTd6_PJA/viewform?embedded=true"
                  }
                  className=" text-base leading-8 text-[#777674] "
                >
                  <li>Interstate Move</li>
                </Link>
                 <Link
                  href={
                    "https://docs.google.com/forms/d/e/1FAIpQLScAyYSpObaVywgkcBo_zKZ6II5XYB59CyVL55uylkcTd6_PJA/viewform?embedded=true"
                  }
                  className=" text-base leading-8 text-[#777674]  "
                >
                  <li>Logistics</li>
                </Link>
                <Link
                  href={
                    "https://docs.google.com/forms/d/e/1FAIpQLScAyYSpObaVywgkcBo_zKZ6II5XYB59CyVL55uylkcTd6_PJA/viewform?embedded=true"
                  }
                  className="text-base leading-8 text-[#777674]  "
                >
                  <li>Home Moves</li>
                </Link>
                <Link
                  href={
                    "https://docs.google.com/forms/d/e/1FAIpQLScAyYSpObaVywgkcBo_zKZ6II5XYB59CyVL55uylkcTd6_PJA/viewform?embedded=true"
                  }
                  className="text-base leading-8 text-[#777674]  "
                >
                  <li>Office Moves</li>
                </Link>
              </p>

              
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-300 py-6">
                Avoiding Claims:
              </h1>

              <p className="mt-3 text-base leading-8 text-[#777674] ">
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
