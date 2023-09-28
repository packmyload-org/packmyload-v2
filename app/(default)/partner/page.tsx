import { Col, Row, Card } from "antd";

import React from "react";


export default function Partnerpage() {
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
              >+
                              <Col span={24} md={10} className="flex flex-col space-y-6">
                  <h3 className="text-4xl font-bold">
                    Become a Business Partner
                  </h3>
                  <p>
                    Find out how your business can benefit by partnering with Packmyload.
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

        <div>
          <div className="w-full bg-[#012D40] h-[200vh] ">
            <div className=" absolute top-[250px] left-[250px] p-2" >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card
                  className="w-96 h-[300px] opacity-80"
                  style={{ backgroundColor: "#F4FAFA" }}
                  title="Business & Retail"
                >
                  <ul>
                    <li>Furniture companies</li>
                    <li>Big Box Stores</li>
                    <li>Any other business that needs to move large items</li>
                  </ul>
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  className="w-96 h-[300px] opacity-80"
                  style={{ backgroundColor: "#F4FAFA" }}
                  title="Integrations & Lead Monetization"
                >
                  <ul>
                    <li>Prop-tech</li>
                    <li>Property Managers</li>
                    <li>Storage Companies</li>
                  </ul>
                </Card>
              </Col>
            </Row>
            </div>
            <div>
              <div className="pt-96">
                <img src="/images/partner/packmyload_1695798527485.jpeg" alt="image-1" className="w-[670px] h-[550px] rounded-sm " />
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
