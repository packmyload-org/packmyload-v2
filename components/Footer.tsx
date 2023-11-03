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
          "/book",
          "/book/items",
          "/book/locations-details",
          "/book/checkout",
        ].some((url) => url === path)
          ? "bg-inherit"
          : "dark-footer"
      }`}
    >
      {[
        "/book",
        "/book/items",
        "/book/locations-details",
        "/book/checkout",
      ].some((url) => url === path) ? null : (
        <div className="px-2 sm:pb-20 xl:pb-0 max-w-6xl mx-auto">
          <Row
            className="w-full h-max"
            justify={"space-between"}
            align={"middle"}
            gutter={[10, 50]}
          >
            <Col span={20} lg={6} className="md:h-[350px] mb-0 lg:mb-6">
              <div className="space-y-8 text-gray-400">
                <a href="/about-us" className="text-xl font-[600]">About Us</a>
                <div className="space-y-6 pt-8 border-t-2 border-t-gray-950">
                  <p className="text-white">
                    We are a professional moving company, powered by technology
                    and created to move more than just your belongings. We'll
                    move you with our hardwork and genuine smiles.
                  </p>
                  <ul className="footer-contacts fl-wrap space-y-2">
                    <li className="w-full flex no-wrap items-center">
                      <a
                        className="text-gray-100 hover:text-gray-950 text-xs"
                        href="/policy"
                      >
                        PRIVACY POLICY
                      </a>
                    </li>
                    <li className="w-full flex no-wrap items-center">
                      <a
                        className="text-gray-100 hover:text-gray-950 text-xs"
                        href="/terms"
                      >
                        TERMS & CONDITIONS
                      </a>
                    </li>
                    <li className="w-full flex no-wrap items-center mt-4">
                      <span className="flex items-center gap-1 mr-2 text-xs">
                        <EnvelopeSimple size={13} color="#4bcbfe" /> Mail:
                      </span>
                      <a
                        className="text-white hover:text-gray-950 text-xs"
                        href="#"
                        target="_blank"
                      >
                        book@packmyload.com
                      </a>
                    </li>

                    <li className="w-full flex no-wrap items-center mt-2">
                      <span className="flex items-center gap-1 mr-2 text-xs">
                        <Phone size={13} color="#4bcbfe" weight="fill" /> Phone:
                      </span>
                      <a className="text-white hover:text-gray-950 text-xs " href="#">
                        0700- PACK-PRO (0700-722-5776)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col
              span={20}
              lg={8}
              className="lg:h-[350px] min-h-max md:min-h-0 mb-6"
            >
              <div className="flex text-gray-400 space-y-8 flex-col h-full w-full">
                <a href='/services' className="text-xl font-[600]">Our Services</a>
                <Row
                  className="w-full pt-8 mb-2 border-t-2 h-full border-t-gray-950"
                  justify={"space-evenly"}
                  gutter={[10, 10]}
                >
                  <Col span={24} lg={10}>
                    <ul className="space-y-4 h-full">
                      <li className="clearfix">
                        <a
                          className="text-white text-xs font-bold"
                          href="/home-moves"
                          title="Home Moves"
                        >
                          Home Moves
                        </a>
                      </li>
                      <li className="clearfix">
                        <a
                          className="text-white text-xs font-bold"
                          href="/office-moves"
                          title="Office Relocation"
                        >
                          Office Relocation
                        </a>
                      </li>
                      <li className="clearfix">
                        <a
                          className="text-white text-xs font-bold"
                          href="/Interstate-Car-Transport"
                          title="Interstate Car Transport"
                        >
                          Interstate Car Transport
                        </a>
                      </li>
                      <li className="clearfix">
                        <a
                          className="text-white text-xs font-bold"
                          href="/cleaning"
                          title="Cleaning"
                        >
                          Cleaning Services
                        </a>
                      </li>
                      <li className="clearfix">
                        <a
                          className="text-white text-xs font-bold"
                          href="/wedding-handling"
                          title="Wedding Gift Handling"
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
                          className="text-white text-xs font-bold"
                          href="/international-relocations"
                          title="International Relocation"
                        >
                          International Relocation
                        </a>
                      </li>
                      <li className="clearfix">
                        <a
                          className="text-white text-xs font-bold"
                          href="/Junk-moves"
                          title="Junk Removal"
                        >
                          {" "}
                          Junk Removal
                        </a>
                      </li>
                      <li className="clearfix">
                        <a
                          className="text-white text-xs font-bold"
                          href="/storage"
                          title="Storage"
                        >
                          Storage
                        </a>
                      </li>
                      <li className="clearfix">
                        <a
                          className="text-white text-xs font-bold"
                          href="/store-delivery"
                          title="Store Delivery"
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
                  <p className="text-white">
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
                  <ul className="text-white uppercase flex flex-wrap gap-5 hover:text-gray-950 w-[100%] md:w-[90%] mx-auto">
                    <li className="flex gap-3 items-center text-xs">
                        <a href="/Faqs">FAQs </a>
                        <div className="bg-[#4db7fe] w-[4px] rounded-full h-1">{''}</div>
                    </li>
                    <li className="flex gap-3 items-center text-xs">
                      <a href="/blog">Blog</a>
                      <div className="bg-[#4db7fe] w-[4px] rounded-full h-1">{''}</div>
                    </li>
                    <li className="flex gap-3 items-center text-xs">
                      <a href="/partner">Partner</a>
                      <div className="bg-[#4db7fe] w-[4px] rounded-full h-1">{''}</div>
                    </li>
                    <li className='text-xs whitespace-nowrap'>
                      <a href="/partner/movers">Move For Us</a>
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
          className="max-w-6xl mx-auto mt-6 px-2"
          justify={"space-between"}
          align={"middle"}
        >
          <div className="mb-2 md:mb-0 w-[60%] ">
            <div className="flex md:flex-row flex-col justify-between gap-4 items-start md:items-center  ">
              <Image
                src="/images/iconpackmyload.webp"
                style={{ width: "30px" }}
                alt="Moving Company in lagos & abuja Nigeria: packmyload icon"
                width={30}
                height={30}
                loading="lazy"
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
                <a href="https://facebook.com/packmyload" target="_blank" aria-label="connect on facebook">
                  <FacebookLogo weight="fill" color="#4bcbfe" size={20} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/packmyload" target="_blank" aria-label="connect on twitter">
                  <TwitterLogo weight="fill" color="#4bcbfe" size={20} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/packmyload" target="_blank" aria-label="connect on instagram">
                  <InstagramLogo weight="fill" color="#4bcbfe" size={20} />
                </a>
              </li>
              <li>
                <a
href="https://www.linkedin.com/company/packmyload-com/about/"
                  target="_blank"
                  aria-label="connect on linkedin"
                >
                  <LinkedinLogo weight="fill" color="#4bcbfe" size={20} />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/Packmyload/" target="_blank"
                aria-label="connect on pinterest"
                >
                  <PinterestLogo weight="fill" color="#4bcbfe" size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC7QlhSoPlX3oJN8hZes2abQ"
                  target="_blank"
                  aria-label="connect on youtube"
                >
                  <YoutubeLogo weight="fill" color="#4bcbfe" size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.threads.net/@packmyload"
                  target="_blank"
                  aria-label="connect on threads"
                >
                  <Image src={Threads} alt="threads icon" width={20} height={18} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
