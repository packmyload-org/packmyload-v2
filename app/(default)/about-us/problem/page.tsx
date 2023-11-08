import { Col, Row } from "antd";
import React from "react";

export default function Problem() {
  return (
    <div className="flex justify-left min-h-screen bg-gray-100">
      <div className="w-full text-black" style={{ marginTop: "70px" }}>
        <section className="gradient-bg items-center py-[20px] lg:py-[5px] h-[fit-content] ">
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

        <div className=" w-full bg-[#FFFFFF]  ">
          <div>
            <div className="flex flex-col gap-5 md:flex-row justify-between pt-3 max-w-6xl mx-auto lg:pt-9">
              <img
                src="/images/partner/packmyload_1695798593791.webp"
                alt="Moving Company in lagos & abuja: Packing Items by Packmen"
                loading="lazy"
                className="w-[100%] h-auto md:w-[50%] md:h-auto lg:h-[550px] mx-auto lg:mx-0 rounded-md object-cover "
              />

              <div className="lg:pt-30 w-[90%] md:w-[50%] lg:w-auto mx-auto lg:mx-0 md:px-2">
                <p className="text-xl lg:text-2xl mt-1 text-[#6D9ED2]">
                  The Stress of Moving
                </p>
                <br />

                <p className="text-sm leading-loose text-[#777674] ">
                  Why is moving so stressful? <br />
                  Moving can be a whirlwind of change, bringing both excitement
                  and <br />
                  challenges. Even local moves involve finding a new home,
                  adapting to a <br />
                  different neighborhood, navigating new commutes, and
                  supporting your <br />
                  children as they transition to new schools. Interstate moves
                  add another layer <br /> of complexity, as you may have to
                  hunt for real estate from a distance, secure <br /> or change
                  jobs, and tackle the intricacies of updating insurance
                  policies, bank <br /> accounts, car registrations, and more.{" "}
                  <br /> 
                  But amidst all this change, there's one constant: the
                  logistics of moving. <br /> Packing up an entire home or
                  apartment, transporting your belongings, and <br /> unpacking
                  at your new destination can be quite the undertaking,
                  regardless of <br />
                  the distance. At Packmyload, we understand these
                  challenges and are <br /> committed to easing your stress by
                  connecting you with top-notch moving <br />
                  companies that will help make your relocation a smooth and
                  hassle-free <br /> experience.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row mt-4 justify-between gap-5 md:shrink-0 max-w-6xl mx-auto">
              <div className="lg:pt-30 w-[90%] md:w-[50%] lg:w-auto mx-auto lg:mx-0 md:px-2">
                <p className="text-xl lg:text-2xl  mt-1 text-[#6D9ED2]">
                  Hiring A Moving Company
                </p>
                <br />

                <p className="text-sm leading-loose text-[#777674] ">
                  Choosing a professional moving company over a do-it-yourself
                  approach not
                  <br /> only alleviates the physical strain of relocating, but
                  also ensures the safe and
                  <br /> efficient handling of your cherished possessions.
                  However, the difference
                  <br /> between a seamless move and a disastrous one often lies
                  in selecting a<br /> reputable and trustworthy moving company.
                  By partnering with a reliable
                  <br /> mover, you can avoid the pitfalls associated with shady
                  operators and enjoy a<br /> stress-free, expertly managed
                  relocation experience.
                  <br /> 
                  But, how do you make sure you hire one of these reliable
                  moving companies?
                  <br /> In 2019, Packmyload embarked on a mission to identify
                  and rank the <br />
                  top moving companies in cities across Nigeria. Our objective
                  was clear: to <br />
                  help customers connect with the most reliable and trustworthy
                  moving <br />
                  companies in their area, ensuring these outstanding movers
                  receive the
                  <br /> recognition and clientele they deserve. Unfortunately,
                  many of the popular <br />
                  consumer platforms being used to research movers offer higher
                  placement to <br />
                  companies willing to pay a premium. At Packmyload, we believe
                  in an <br />
                  unbiased approach – you can't purchase your way to the top of
                  our list. Our
                  <br /> commitment is to provide objective, data-driven
                  rankings of the best moving <br />
                  companies, ensuring you have a smooth and stress-free moving
                  day <br />
                  experience.
                </p>
              </div>
              <img
                src="/images/about/packmyload_1696572756874.webp"
                alt="Moving Company in lagos & abuja: Packing Items by Packmen"
                loading="lazy"
                className="w-[100%] h-auto md:w-[50%] md:h-auto lg:h-[550px] mx-auto lg:mx-0 rounded-md object-cover mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
