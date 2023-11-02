"use client";
import { AdServicesCard } from "@/components/landing/custom/AdServicesCard";
import { ServicesHeader } from "@/components/services/ServicesHeader";
import Image from "next/image";
import {
  Coin,
  CreditCard,
  LightningSlash,
  SneakerMove,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function HomeMoves() {
  return (
    <main className="bg-[#F9F9F9]">
      <ServicesHeader
        bgImage="url(/images/moving-company-lagos-nigeria-packmyload.com-students_move-banner_image.webp)"
        firstText="Home Relocation within Nigeria"
        secondText="Home Relocation within Nigeria"
      />

      <div className="w-full h-auto mt-6">
        <div className="flex flex-col gap-4 bg-[#EDF2F8] py-2">
          <div className="flex flex-col gap-5 md:flex-row justify-between max-w-6xl mx-auto md:px-1">
            <div className="mx-auto w-full h-full flex items-center">
              <img
                src="/images/about/packmyload_1696572786359.webp"
                alt="image-1"
                loading="lazy"
                className="w-full h-auto lg:h-[400px] mx-auto lg:mx-0 rounded-md object-cover flex-grow"
              />
            </div>

            <div className=" w-[90%] flex flex-col justify-center">
              <h2 className="text-xl lg:text-2xl font-semibold w-full py-2 mt-4 md:mt-0 px-2 lg:px-0 mx-auto text-[#566985]">
                {" "}
                RESIDENTIAL/LOCAL MOVE
              </h2>
              <p className=" w-full text-sm mt-4 px-2 lg:px-0 mx-auto text-[#878C9F]">
                Any relocation within a state is a local move. Whether we have
                to climb the stairs or not, requires care and professionalism.
                Packmyload offers a full range of local moving services within Lagos
                including full packing and set up services. We also offer
                professional packing for fragile items like fine art, antiques,
                marble and glassware. No matter what your needs are,
                Packmyload can provide a level of customer service and
                expertise unmatched by other apartment movers in Lagos. Whether
                you're moving from the 6th to 12th floor or from Alimosho to
                Lekki in Lagos, Packmyload is the best way to get there. Our
                fast moving service has earned Packmyload hundreds of satisfied
                customers and the reputation as the local moving company to
                trust in Lagos.
              </p>

             
            </div>
          </div>

          <div className="flex flex-col gap-5 py-4 md:flex-row justify-between max-w-6xl mx-auto md:px-1">
            <div className=" w-[90%] flex flex-col justify-center">
              <h2 className="text-xl lg:text-2xl font-semibold w-full mt-4 md:mt-0 px-2 lg:px-0 mx-auto text-[#566985]">
                {" "}
                INTERSTATE/LONG DISTANCE MOVE
              </h2>
              <p className=" w-full text-sm mt-4 px-2 lg:px-0 mx-auto text-[#878C9F]">
                Whether you are moving just across state lines or across the
                country, our interstate movers can help transport your
                belongings to your new home with ease and simplicity!
              </p>

              <p className=" w-full text-sm mt-4 px-2 lg:px-0 mx-auto text-[#878C9F]">
                Whether you are moving/relocating from Lagos to Abuja, or from
                any state within Nigeria, Packmyload got you. Interstate moving
                or a long distance move requires proper planning to make it a
                smooth and stress-free experience. Starting with the moving
                quote process, we partner with you to gather all the information
                you need to make the decision we need to complete your long
                distance move on budget and on time. You can start the process
                by requesting a free long dis- tance moving quote from
                Packmyload.
              </p>

              <div className="flex flex-wrap gap-3 py-6 ">
                <section className="flex gap-1 items-center">
                  <Image
                    src="/images/icons/aid-support.webp"
                    alt="aid-support"
                    width={80}
                    height={80}
                    className="object-contain "
                  />
                  <div>
                    <h1 className="text-base text-[#4DB7FE] font-bold">
                      Packing and Unpacking{" "}
                    </h1>
                  </div>
                </section>
                <section className="flex gap-1 items-center">
                  <Image
                    src="/images/icons/guarantee-icon.webp"
                    alt="gurantee-icon"
                    width={80}
                    height={80}
                    className="object-contain "
                  />
                  <div>
                    <h1 className="text-base text-[#4DB7FE] font-bold">
                      Storage Services{" "}
                    </h1>
                  </div>
                </section>
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

      <div className="flex flex-row flex-wrap gap-2 justify-center max-w-6xl mx-auto mt-6 ">
        <img
          src="/images/partner/packmyload_1697583737398.webp"
          alt="image-1"
          className="w-[355px] h-[350px] bottom-20 object-cover"
        />
        <img
          src="/images/about/packmyload_1696572694895.webp"
          alt="image-2"
          className="w-[355px] h-[350px] bottom-20 object-cover"
        />
        <img
          src="/images/partner/packmyload_1697583683638.webp"
          alt="image-3"
          className="w-[355px] h-[350px] bottom-20 object-cover"
        />
      </div>

      <div className="w-full h-auto mt-6">
        <div className="flex flex-col max-w-6xl mx-auto px-2 md:px-1">
          <h2 className="text-lg md:text-4xl font-bold text-[#566985]">
          #1 MOVING COMPANY IN NIGERIA
          </h2>
          <h3 className=" text-sm pt-5 text-[#878C9F]  ">
            #1 rated best moving/relocation company in Nigeria Whether you're
            moving across the street or across a cer- tain region, Packmyload
            has got you. Our experienced team of movers take pride in arranging
            a seamless move for your household and business, making it fast and
            efficient. Our mission is to make your move stress free for you.
          </h3>
        </div>
        <div>
          <div className="grid grid-col max-w-6xl mx-auto py-4 px-2 md:px-1"></div>
        </div>
      </div>

      <section className="md:flex justify-center gap-4 max-w-6xl mx-auto mt-3 sm:block">
        <div className="bg-white md:w-[50%] lg:w-[70%] sm:w-[90%] p-6 rounded-md border-2 border-[#eee]">
          <section>
            <h1 className="text-xl font-bold text-[#566985]">
              Home Moving Company Nigeria
            </h1>
            <p className="mt-2 text-[#878C9F]">
              Whether it’s just a few items that need to be moved to another
              room, or an entire apartment or house, Packmyload Moving is the
              cost-effective option. Our moving services will eliminate the
              hassle of renting a van and doing the heavy lifting yourself. What
              makes packmyload unique is that once you arrive at your
              destination, Packmyload will be there to assist in additional
              chores to alleviate the stress of your move!
            </p>
          </section>
          <section className="mt-3">
            <h1 className="text-xl font-bold text-[#566985]">
              Furniture Moving and Delivery
            </h1>
            <p className="mt-2 text-[#878C9F]">
              We also deliver and furniture throughout Lagos and around Nigeria.
              If you’ve just invested in a fantastic piece of furniture, why let
              anyone but an experienced professional handle it? Our team are
              fit, friendly and most important of all, they’re specially trained
              to handle expensive and delicate items. We offer comprehensive
              packing service packing for furniture; special equipment and
              material for handling furniture and sensible pricing.
            </p>
          </section>
          <section className="mt-3">
            <h1 className="text-xl font-bold text-[#566985]">
              Garbage & Donations Removal
            </h1>
            <p className="mt-2 text-[#878C9F]">
              On or before your moving day packmyload will pickup and dispose of
              garbage that you do not wish to take with you to your new home.
              Alternatively, you may choose to donate certain items. packmyload
              can deliver these items to the location of your choice.
            </p>
          </section>
          <section className="mt-3">
            <h1 className="text-xl font-bold text-[#566985]">
              Moving Day Services
            </h1>
            <p className="mt-2 text-[#878C9F]">
              Packmyload provides full service on your moving day by coming
              prepared with shrink-wrap to wrap all your furniture before the
              move to minimize scuffs & stains that can result from the moving
              process. Also included is the disassembling & reassembling of all
              items that can not be transported in one piece.
              <br />
              We disassemble & reassemble: Beds, Sectional desks, Shelves out of
              bookcases, Entertainment units, China Cabinets, Sectional Sofas
              and more.
            </p>
          </section>
          <section className="mt-3">
            <h1 className="text-xl font-bold text-[#566985]">
              On-Call Moving & Emergency Moving
            </h1>
            <p className="mt-2 text-[#878C9F]">
              We realize that all moves are not planned in advance, this is why
              packmyload offers our On-Call Moving and Emergency moving
              services. packmyload can make a last minute move painless with our
              hassle free, full service moving package. Please call us to see if
              we can help you with your last minute move. We will get you moved
              the same day where possible, and if not we can usually get you in
              the next day.
            </p>
          </section>
        </div>
        <div className="md:w-[50%] lg:w-[30%] sm:w-[90%]">
          <section className="flex gap-2 items-start mt-4">
            <Image
              src="/images/icons/recycle-icon.webp"
              alt="recycle-icon"
              width={100}
              height={100}
              className="object-contain "
            />
            <div>
              <h1 className="text-lg text-[#4DB7FE] font-bold">
                Responsible Disposal
              </h1>
              <p className="mt-2 text-[#878C9F]">
                Your junk is taken to licensed recycling facilities or passed on
                for reuse.
              </p>
            </div>
          </section>
          <section className="flex gap-2 items-start mt-12">
            <Image
              src="/images/icons/check-icon.webp"
              alt="check-icon"
              width={100}
              height={100}
              className="object-contain "
            />
            <div>
              <h1 className="text-lg text-[#4DB7FE] font-bold">Thorough</h1>
              <p className="mt-2 text-[#878C9F]">
                Once the team has loaded all the unwanted items, they will give
                the area one last sweep up and tidy to ensure you are good to
                go.
              </p>
            </div>
          </section>
          <section className="flex gap-2 items-start mt-12">
            <Image
              src="/images/icons/aid-support.webp"
              alt="aid-support"
              width={100}
              height={100}
              className="object-contain "
            />
            <div>
              <h1 className="text-lg text-[#4DB7FE] font-bold">
                24 Hours Support
              </h1>
              <p className="mt-2 text-[#878C9F]">
                Packmyload.com is proud to offer 24 hours support. When you call
                the Packmyload.com support team, you’ll speak to a person
                immediately, addressing any issues and ensuring prompt
                resolution.
              </p>
            </div>
          </section>
          <section className="flex gap-2 items-start mt-12">
            <Image
              src="/images/icons/guarantee-icon.webp"
              alt="gurantee-icon"
              width={100}
              height={100}
              className="object-contain "
            />
            <div>
              <h1 className="text-lg text-[#4DB7FE] font-bold">
                Packmyload.com Guarantee
              </h1>
              <p className="mt-2 text-[#878C9F]">
                At Packmyload, we apply our ‘can-do’ attitude to every job we
                take on. We guarantee 100% satisfaction.
              </p>
            </div>
          </section>
        </div>
      </section>
      <section className="mt-6">
        <div className="flex flex-wrap mx-auto items-center justify-center h-full bg-[#4DB7FE] gap-4 py-12 px-1">
          <h1 className="text-xl md:text-2xl font-bold text-[#ffff] ">
            Request A  Moving Quote
          </h1>

          <Link href="/move">
            <button className="text-white shadow-lg border-2 text-xl font-bold p-2 w-[200px] bg-[#4BCBFE] outline-none transition-colors duration-600 hover:animate-pulse hover:bg-white hover:text-black">
              Get Quote
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
