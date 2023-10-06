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
              >
                <Col span={24} md={10} className="flex flex-col space-y-6">
                  <h3 className="text-4xl font-bold">
                    Become a Business Partner
                  </h3>
                  <p >
                    Find out how your business can benefit by partnering with
                    Packmyload.
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
          <div className="w-full bg-[#012D40] h-[275vh] ">
            <div className="absolute top-[250px] left-[250px] p-2">
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
              <div className="flex   pt-96">
                <img
                  src="/images/partner/packmyload_1695798527485.jpeg"
                  alt="image-1"
                  className="w-[670px] h-[550px] rounded-sm "
                />
                <div className="pl-40 pt-40">
                  <p className=" text-5xl  mt-4 text-white">
                    Business & Retail
                  </p>

                  <li className="text-base  text-white">
                    Residential moves (apartments, homes, condos)
                  </li>
                  <li className="text-base  text-white">
                    Moving belongings into storage
                  </li>
                  <li className="text-base  text-white">
                    One-off deliveries (piece of furniture)
                  </li>

                  <p className="text-base  text-white">
                    Packmyload can manage your business delivery logistics for{" "}
                    <br /> you. If you deliver large items to you clients but
                    you don’t <br /> want to waste time managing the moves.
                  </p>
                </div>
              </div>

              <div className="flex   pt-48">
                <div className="pl-40 pt-40">
                  <p className=" text-5xl  mt-4 text-white">
                    Integration & Lead Monetization
                  </p>

                  <li className="text-base  text-white">
                    Residential moves (apartments, homes, condos)
                  </li>
                  <li className="text-base  text-white">
                    Moving belongings into storage
                  </li>
                  <li className="text-base  text-white">
                    One off deliveries (piece of furniture)
                  </li>

                  <p className="text-base  text-white">
                  {" "}You don’t have to be in the space to be a part of the moving{" "}
                    <br /> and delivery ecosystem. If you have leads and users
                    that <br /> move often, you can get a commission for each
                    user you send <br /> us our way.
                  </p>
                </div>
                <img
                  src="/images/partner/packmyload_1695798593791.jpeg"
                  alt="image-2"
                  className="w-[670px] h-[550px] rounded-sm pl-5 "
                />
              </div>
            </div>
          </div>

          <div className="w-full bg-[#fff] h-[80vh] pt-36 pl-52 ">
  <div className="bg-[#76DAE2] w-[80%] h-[40vh]  flex justify-end items-center relative rounded-xl ">
    <button
      className="w-full h-full text-xl font-bold rounded-xl flex justify-between items-center hover:bg-opacity-100 focus:outline-none hover: transition duration-300"
      // style={{ backgroundColor: '#76DAE2', borderRadius: '50px' }} 
    >
      <div className="flex items-center">
        <div className="w-6 h-6  flex justify-center items-center transform transition-transform duration-300">
          &nbsp;
        </div>
        
        <span className=" text-[#2E5F9E] text-5xl   mt-4 ">{"Talk To A"}<br/> {"Representative"}</span>
        
      </div>
      <div
        className="w-16 h-16 mt-40 mr-14 bg-white rounded-full flex justify-center text-[#2E5F9E] items-center transform transition-transform duration-300 hover:translate-x-2"
      >
        &rarr;
      </div>
    </button>
  </div>
</div>




        </div>
      </div>
    </div>
  );
}
