"use client";
import React from "react";
import Image from "next/image";
import { Col, Row } from "antd";
import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Phone,
  PinterestLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import Threads from "@/public/images/icons/threads.svg";
export default function Footer() {
  const path = usePathname();
  return (
    <footer
      className={` main-footer w-full ${
        [
          "/book_a_move",
          "/book_a_move/items",
          "/book_a_move/locations-details",
          "/book_a_move/checkout",
        ].some((url) => url === path)
          ? "bg-inherit"
          : "dark-footer"
      }`}
    >
      {[
        "/book_a_move",
        "/book_a_move/items",
        "/book_a_move/locations-details",
        "/book_a_move/checkout",
      ].some((url) => url === path) ? null : (
        <div className="container sm:pb-20 xl:pb-0">
          <Row
            className="w-full h-max"
            justify={"space-between"}
            align={"middle"}
            gutter={[10, 50]}
          >
            <Col span={24} lg={6} className="md:h-[350px] mb-0 lg:mb-6">
              <div className="space-y-8 text-gray-400">
                <h3 className="text-xl font-[600]">About Us</h3>
                <div className="space-y-6 pt-8 border-t-2 border-t-gray-950">
                  <p className="text-white">
                    We are a professional moving company, powered by technology
                    and created to move more than just your belongings. We'll
                    move you with our hardwork and genuine smiles.
                  </p>
                  <ul className="footer-contacts fl-wrap space-y-2">
                    <li className="w-full flex no-wrap items-center">
                      <a
                        className="text-gray-100 hover:text-gray-950"
                        href="/privacy"
                      >
                        PRIVACY POLICY
                      </a>
                    </li>
                    <li className="w-full flex no-wrap items-center">
                      <a
                        className="text-gray-100 hover:text-gray-950"
                        href="/terms"
                      >
                        TERMS & CONDITIONS
                      </a>
                    </li>
                    <li className="w-full flex no-wrap items-center">
                      <span className="flex items-center gap-1 mr-2">
                        <EnvelopeSimple color="#4bcbfe" /> Mail:
                      </span>
                      <a
                        className="text-gray-400 hover:text-gray-950"
                        href="#"
                        target="_blank"
                      >
                        book@packmyload.com
                      </a>
                    </li>

                    <li className="w-full flex no-wrap items-center">
                      <span className="flex items-center gap-1 mr-2">
                        <Phone size={16} color="#4bcbfe" weight="fill" /> Phone:
                      </span>
                      <a className="text-gray-400 hover:text-gray-950" href="#">
                        0700- PACK-PRO (0700-722-5776)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col
              span={24}
              lg={8}
              className="lg:h-[350px] min-h-max md:min-h-0 mb-6"
            >
              <div className="flex text-gray-400 space-y-8 flex-col h-full w-full">
                <h3 className="text-xl font-[600]">Our Services</h3>
                <Row
                  className="w-full pt-8 mb-2 border-t-2 h-full border-t-gray-950"
                  justify={"space-evenly"}
                  gutter={[10, 10]}
                >
                  <Col span={24} lg={10}>
                    <ul className="space-y-4 h-full">
                      <li className="clearfix">
                        <a
                          className="text-gray-400"
                          href="/services/home-moves"
                          title=""
                        >
                          Home Moves
                        </a>
                      </li>
                      <li className="clearfix">
                        <a
                          className="text-gray-400"
                          href="/services/office-moves"
                          title=""
                        >
                          Office Relocation
                        </a>
                      </li>
                      <li className="clearfix">
                        <a
                          className="text-gray-400"
                          href="/services/interstate-Car-Transport"
                          title="Student Moves"
                        >
                          Interstate Car Transport
                        </a>
                      </li>
                      <li className="clearfix">
                        <a
                          className="text-gray-400"
                          href="/services/cleaning"
                          title="Cleaning"
                        >
                          Cleaning Services
                        </a>
                      </li>
                      <li className="clearfix">
                        <a
                          className="text-gray-400"
                          href="/services/wedding-handling"
                          title=""
                        >
                          Wedding Gift Handling
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col span={24} lg={10}>
                    <ul className="space-y-4 h-full md:mt-0 mt-2">
                      <li className="clearfix">
                        <a
                          className="text-gray-400"
                          href="/services/international-relocations"
                          title=""
                        >
                          International Relocation
                        </a>
                      </li>
                      <li className="clearfix">
                        <a
                          className="text-gray-400"
                          href="/services/junk-moves"
                          title=""
                        >
                          {" "}
                          Junk Removal
                        </a>
                      </li>
                      <li className="clearfix">
                        <a
                          className="text-gray-400"
                          href="/services/storage"
                          title=""
                        >
                          Storage
                        </a>
                      </li>
                      <li className="clearfix">
                        <a
                          className="text-gray-400"
                          href="/services/store-delivery"
                          title=""
                        >
                          Store Delivery
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={24} lg={8} className="md:h-[350px] mb-6">
              <div className="space-y-8 text-gray-400" text-gray-500>
                <h3 className="text-xl font-[600]">Subscribe</h3>
                <div className="space-y-8 pt-8 border-t-2 border-t-gray-950">
                  <p>
                    Want to be notified when we have Moving tip or offers. Just
                    sign up and we'll send you a notification by email.
                  </p>
                  <form className="flex flex-col gap-6">
                    <input
                      className="w-full p-2 h-10 rounded-lg outline-none"
                      name="EMAIL"
                      placeholder="Enter your Email"
                      type="email"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full p-2 h-10 bg-blue-100 text-white hover:bg-blue-600 rounded-lg"
                    >
                      Subscribe
                    </button>
                    <div className="clearfix"></div>
                  </form>
                  <ul className="text-white uppercase inline-flex gap-5 hover:text-gray-950">
                    <li className="flex gap-3 items-center text-xs sm:text-base">
                        <a href="/faqs">FAQs </a>
                        <div className="bg-[#4db7fe] w-[4px] rounded-full h-1">{''}</div>
                    </li>
                    <li className="flex gap-3 items-center text-xs sm:text-base">
                      <a href="/blog">Blog</a>
                      <div className="bg-[#4db7fe] w-[4px] rounded-full h-1">{''}</div>
                    </li>
                    <li className="flex gap-3 items-center text-xs sm:text-base">
                      <a href="/partner">Partner</a>
                      <div className="bg-[#4db7fe] w-[4px] rounded-full h-1">{''}</div>
                    </li>
                    <li className='text-xs sm:text-base whitespace-nowrap'>
                      <a href="/become_a_packer">Become a Packer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
      <div className="bg-slate-800 py-6 ">
        <Row
          className="w-full mt-6 sm:container"
          justify={"space-between"}
          align={"middle"}
        >
          <div className="mb-2 md:mb-0 w-[60%] ">
            <div className="flex md:flex-row flex-col justify-between gap-4 items-start md:items-center  ">
              <Image
                src="/images/iconpackmyload1.png"
                style={{ width: "30px" }}
                alt="image"
                width={30}
                height={30}
              />
              <div className="copyright text-gray-400">
                © Total Moves &amp; Company LTD {new Date().getFullYear()}. All
                rights reserved.
              </div>
            </div>
          </div>
          <Col span={24} md={8}>
            <ul className="flex gap-4 w-full justify-start md:justify-end">
              <li>
                <a href="https://facebook.com/packmyload" target="_blank">
                  <FacebookLogo weight="fill" color="#4bcbfe" size={20} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/packmyload" target="_blank">
                  <TwitterLogo weight="fill" color="#4bcbfe" size={20} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/packmyload" target="_blank">
                  <InstagramLogo weight="fill" color="#4bcbfe" size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/packmyload-com/about/"
                  target="_blank"
                >
                  <LinkedinLogo weight="fill" color="#4bcbfe" size={20} />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/Packmyload/" target="_blank">
                  <PinterestLogo weight="fill" color="#4bcbfe" size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC7QlhSoPlX3oJN8hZes2abQ"
                  target="_blank"
                >
                  <YoutubeLogo weight="fill" color="#4bcbfe" size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC7QlhSoPlX3oJN8hZes2abQ"
                  target="_blank"
                >
                  <Image src={Threads} alt="threads" width={20} height={18} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
