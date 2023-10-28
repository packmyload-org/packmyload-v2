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
          <div className="grid grid-col ">
            <div>
              <h1>For a recently completed household move with Mayflower:</h1>
              <Link href="/contact">
                <p >Click here to submit a claim</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
