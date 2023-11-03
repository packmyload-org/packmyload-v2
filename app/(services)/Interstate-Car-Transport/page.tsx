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

export default function StudentMoves() {
  return (
    <main className="bg-[#F9F9F9]">
      <ServicesHeader
        bgImage="url(/images/extra/Ai-3.webp)"
        firstText="Interstate Car Transport"
        secondText="Interstate Car Transport"
      />

      <div className="w-full h-auto mt-6">
        <div className="flex flex-col gap-4 bg-[#EDF2F8] py-2">
          <div className="flex flex-col gap-5 md:flex-row justify-between max-w-6xl mx-auto md:px-1">
            <div className="mx-auto w-full h-full flex items-center">
              <img
                src="/images/extra/Ai-8.webp"
                alt="image-1"
                loading="lazy"
                className="w-full h-auto lg:h-[400px] mx-auto lg:mx-0 rounded-md object-cover flex-grow"
              />
            </div>

            <div className=" w-[90%] flex flex-col justify-center">
              <h2 className="text-xl lg:text-2xl font-semibold w-full py-2 mt-4 md:mt-0 px-2 lg:px-0 mx-auto text-[#566985]">
                {" "}
                Nigeria’s Premier Car Transport Services
              </h2>
             

              <p className=" w-full text-sm mt-4 px-2 lg:px-0 mx-auto text-[#878C9F]" >
              Packmyload have providedthe best in interstate car carrying services throughout Nigeria for
            close to a decade. With our team of passionate experts, reliable
            methods and equipment, you can trust us to get your car where it
            needs to be safely and quickly Wherever you are in Nigeria, and
            wherever you need your car to be, Packmyload can help you get it there.
            Our car transportation specialists move vehicles throughout the
            country - depot to depot and door to door. With competitive prices
            and decades of experience, trust us for all of your car carrying
            needs.
              </p>

              <p className=" w-full text-sm mt-4 px-2 lg:px-0 mx-auto text-[#878C9F]">
                Packmyload has been providing customers with reliable and
                professional long distance moving services for more than 5
                years. For close to a decade of perfecting the interstate moving
                process (from quote to move-in day), we understand what
                customers need in order to have a great moving experience. We
                strive to provide customers everything they need for a
                successful move. This includes allowing you to build your own
                move plan with customizable service options that meet your
                needs, budget and schedule. We also include our basic Full Value
                Protection option in every initial moving quote. We have earned
                the reputation of Nigeria’s Most Trusted Moving Company with the
                flexibility we offer to customers.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 py-4 md:flex-row justify-between max-w-6xl mx-auto md:px-1">
            <div className=" w-[90%] flex flex-col justify-center">
              <h2 className="text-xl lg:text-2xl font-semibold w-full mt-4 md:mt-0 px-2 lg:px-0 mx-auto text-[#566985]">
                {" "}
                Car Transport You Can Trust
              </h2>
              <p className=" w-full text-sm mt-4 px-2 lg:px-0 mx-auto text-[#878C9F]">
              We specialise in door-to-door
            statewide and interstate car transport of all cars, 4WD, trucks,
            motorcycles, boats and trailers. We maintain a vast network of
            trusted carriers, ensuring the highest value service for our
            customers. Whether you are transporting your car across the state,
            or the nation, you can trust that Packmyload has what
            you need to get your vehicle delivered safely.
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
                src="/images/extra/Ai-1.webp"
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
          src="/images/extra/Ai-7.webp"
          alt="image-1"
          className="w-[355px] h-[350px] bottom-20 object-cover"
        />
        <img
          src="/images/extra/Ai-11.webp"
          alt="image-2"
          className="w-[355px] h-[350px] bottom-20 object-cover"
        />
        <img
          src="/images/extra/Ai-6.webp"
          alt="image-3"
          className="w-[355px] h-[350px] bottom-20 object-cover"
        />
      </div>

      <div className="w-full h-auto mt-6">
        <div className="flex flex-col max-w-6xl mx-auto px-2 md:px-1">
          <h2 className="text-lg md:text-4xl font-bold text-[#566985]">
          Safe and Sound Car Transport Options
          </h2>
         

          <h3 className=" text-sm pt-5 text-[#878C9F]  " >

          If you need to relocate your vehicle anywhere in
            Nigeria , we are the team you can trust. We provide safe, reliable
            service with an unparalleled dedication to customer service. From
            our quick, easy quotes to our vast network of Nigerian
            connections, when you choose us, you are getting the best. We make
            transporting your car long distance easy and hassle-free. We take
            the stress out of moving your car interstate! Multiple Options and
            Pricing No matter what the reason for moving your car, we have the
            knowledge and expertise to get the job done right.
          </h3>

          <h3>

          </h3>
        </div>
        <div>
          <div className="grid grid-col max-w-6xl mx-auto px-2 md:px-1">
            {/* <h2 className="text-lg py-4 md:text-4xl font-semibold text-[#566985] ">
              Types of Long Distance Moves
            </h2> */}
          </div>
        </div>
      </div>

      {/* <section className="md:flex justify-center gap-4 max-w-6xl mx-auto mt-3 sm:block md:px-1">
        <div className="bg-white md:w-[50%] lg:w-[70%] sm:w-[90%] p-6 rounded-md border-2 border-[#eee]">
          <section>
            <h1 className="text-xl font-bold text-[#566985]">Small Moves</h1>
            <p className="mt-2 text-sm text-[#878C9F]">
              If you live in a small home, an apartment, condo or townhouse, let
              us help get your long distance move going.
            </p>
          </section>
          <section className="mt-3">
            <h1 className="text-xl font-bold text-[#566985]">
              Residential Moves
            </h1>
            <p className="mt-2 text-sm text-[#878C9F]">
              Home moving can be overwhelming. Let us take the stress out of
              moving and get you started with a quote today.
            </p>
          </section>
          <section className="mt-3">
            <h1 className="text-xl font-bold text-[#566985]">
              International Moves
            </h1>
            <p className="mt-2 text-sm text-[#878C9F]">
              If you are moving to another country, Mayflower International can
              manage your international move from start to finish.
            </p>
          </section>
          <section className="mt-3">
            <h1 className="text-xl font-bold text-[#566985]">
              Corporate Relocation
            </h1>
            <p className="mt-2  text-sm text-[#878C9F]">
              Whether you have a lump sum or are looking for corporate
              relocation services for your transferees, we can help with your
              corporate move.
            </p>
          </section>
          <section className="mt-3">
            <h1 className="text-xl font-bold text-[#566985]">
              Small And Large Student Moves
            </h1>
            <p className="mt-2 text-sm text-[#878C9F]">
              No matter what you need to move, Packmyload can help. We offer
              student moves for any location and items from 1kg up to 30kg and
              you can book as many items as you like with us.
            </p>
          </section>
        </div>
        <div className="md:w-[50%] md:w-[50%] sm:w-[90%]">
          <section className="flex gap-2 items-start mt-4">
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
              <p className="mt-2 text-sm text-[#878C9F]">
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
              <p className="mt-2 text-sm text-[#878C9F]">
                At Packmyload, we apply our ‘can-do’ attitude to every job we
                take on. We guarantee 100% satisfaction.
              </p>
            </div>
          </section>
        </div>
      </section> */}
      <section className="mt-6">
        <div className="flex flex-wrap mx-auto items-center justify-center h-full bg-[#4DB7FE] gap-4 py-12 px-1">
          <h1 className="text-xl md:text-2xl font-bold text-[#ffff] ">
            Request A Interstate Moving Quote
          </h1>

          <Link href="/book">
            <button className="text-white shadow-lg border-2 text-xl font-bold p-2 w-[200px] bg-[#4BCBFE] outline-none transition-colors duration-600 hover:animate-pulse hover:bg-white hover:text-black">
              Get Quote
            </button>
          </Link>
          {/* <p>
            Nigeria’s Premier Car Transport Services Packmyload have provided
            the best in interstate car carrying services throughout Nigeria for
            close to a decade. With our team of passionate experts, reliable
            methods and equipment, you can trust us to get your car where it
            needs to be safely and quickly Wherever you are in Australia, and
            wherever you need your car to be, PrixCar can help you get it there.
            Our car transportation specialists move vehicles throughout the
            country - depot to depot and door to door. With competitive prices
            and decades of experience, trust us for all of your car carrying
            needs.   We move all kinds
            of vehicles for all types of customers. Many customers come to us
            when they are planning a move interstate. We provide families and
            individuals with peace of mind that their vehicle will be safely
            delivered to their new home without ever having to subject it to the
            wear and tear that comes with driving it long distance. Transport
            Services Across Nigeria No matter where you need to transport your
            car to or from, we can get it there. Whether you choose a door to
            door service, or depot to depot, we have the Australia wide
            connections to get your car where it needs to be. Our team of
            experts will provide you with the most accurate, affordable quote to
            move your car anywhere in Australia. Give us a call today, or grab a
            quote online and get ready to experience car carriers interstate
            that cares! Budget-friendly transport services every day All types
            of vehicles transported Additionally, we provide a safe and reliable
            car transport domestic service to all kinds of businesses from a car
            hire companies to government and local authorities. You can rest
            assured that your car is in good hands when you choose Interstate
            Car Carriers. No matter if you are moving a car, a truck a bus, boat
            or caravan, we have you covered, grab an obligation free quote today
            If you are looking to transport a car with goods inside or you need
            an express transport service we can help
          </p> */}
        </div>
      </section>
    </main>
  );
}
