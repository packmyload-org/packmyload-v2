"use client"
import { AdServicesCard } from '@/components/landing/custom/AdServicesCard'
import { ServicesHeader } from '@/components/services/ServicesHeader'
import Image from 'next/image'
import {
    Coin,
    CreditCard,
    LightningSlash,
    SneakerMove,
  } from "@phosphor-icons/react";
import Link from 'next/link'

export default function StudentMoves(){

    return (
        <main className='bg-[#F9F9F9]'>
            <ServicesHeader 
                bgImage='url(/images/moving-company-lagos-nigeria-packmyload.com-students_move-banner_image.webp)'
                firstText='Interstate Car Transport'
                secondText='Interstate Car Transport'
            />

            <div className="w-full h-auto mt-6">
          <div className="flex flex-col gap-4 bg-[#EDF2F8] py-2">
            <div className="flex flex-col gap-5 md:flex-row justify-between max-w-6xl mx-auto md:px-1">
              <div className="mx-auto w-full h-full flex items-center">
                <img
                  src="/images/partner/packmyload_1695798593791.webp"
                  alt="image-1"
                  loading="lazy"
                  className="w-full h-auto lg:h-[400px] mx-auto lg:mx-0 rounded-md object-cover flex-grow"
                />
              </div>

              <div className=" w-[90%] flex flex-col justify-center">
                <h2 className="text-xl lg:text-2xl font-semibold w-full py-2 mt-4 md:mt-0 px-2 lg:px-0 mx-auto text-[#566985]">
                  {" "}
                  Trusted Long Distance Moving Company
                </h2>
                <p className=" w-full text-sm mt-4 px-2 lg:px-0 mx-auto text-[#878C9F]">
                  Packmyload has been providing customers with reliable and
                  professional long distance moving services for more than 5
                  years. For close to a decade of perfecting the interstate
                  moving process (from quote to move-in day), we understand what
                  customers need in order to have a great moving experience. We
                  strive to provide customers everything they need for a
                  successful move. This includes allowing you to build your own
                  move plan with customizable service options that meet your
                  needs, budget and schedule. We also include our basic Full
                  Value Protection option in every initial moving quote. We have
                  earned the reputation of Nigeria’s Most Trusted Moving Company
                  with the flexibility we offer to customers.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 py-4 md:flex-row justify-between max-w-6xl mx-auto md:px-1">
              <div className=" w-[90%] flex flex-col justify-center">
                <h2 className="text-xl lg:text-2xl font-semibold w-full mt-4 md:mt-0 px-2 lg:px-0 mx-auto text-[#566985]">
                  {" "}
                  Interstate Moving Services
                </h2>
                <p className=" w-full text-sm mt-4 px-2 lg:px-0 mx-auto text-[#878C9F]">
                  Whether you are moving just across state lines or across the
                  country, our interstate movers can help transport your
                  belongings to your new home with ease and simplicity!
                </p>

                <div className="flex flex-wrap gap-3 py-6 ">

                  <section className='flex gap-1 items-center'>
                      <Image 
                          src="/images/icons/aid-support.webp"
                          alt='aid-support'
                          width={80}
                          height={80}
                          className="object-contain " 
                      />
                      <div>
                          <h1 className='text-base text-[#4DB7FE] font-bold'>Packing and Unpacking </h1>
                        
                      </div>
                  </section>
                  <section className='flex gap-1 items-center'>
                      <Image 
                          src="/images/icons/guarantee-icon.webp"
                          alt='gurantee-icon'
                          width={80}
                          height={80}
                          className="object-contain " 
                      />
                      <div>
                          <h1 className='text-base text-[#4DB7FE] font-bold'>Storage Services </h1>
                        
                      </div>
                  </section>
                    {/* <AdServicesCard
                      Icon={<Coin size={24} color="#2E5F9E" weight="fill" />}
                      text="Earn a fixed salary "
                    />

                    <AdServicesCard
                      Icon={
                        <CreditCard size={24} color="#2E5F9E" weight="fill" />
                      }
                      text="Get paid after every job "
                    />

                    <AdServicesCard
                      Icon={
                        <SneakerMove
                          size={24}
                          color="#2E5F9E"
                          weight="fill"
                        />
                      }
                      text="Choose when to stop working "
                    /> */}
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
              What is a Long Distance Move?
            </h2>
            <h3 className=" text-sm pt-5 text-[#878C9F]  ">
              Long distance moves are different than local moves (moving a short
              distance within a metro area within the same state) and intrastate
              moves (longer distance moves that occur within the same state)
              because they involve moving goods across state lines. A cross
              country move can also be referred to as a long distance move, an
              interstate move or a state-to-state move. No matter the distance,
              all moves that involve crossing a state line require special,
              federal authority. U.S. federal laws and regulations, including
              insurance requirements, are designed to protect consumers before,
              during and after their moves. It is important that you are able to
              distinguish reputable long distance moving companies from
              fraudulent or so-called “rogue” movers, who are often not really
              movers and have been known for holding personal property hostage
              for additional fees and other scams.
            </h3>
          </div>
          <div>
            <div className="grid grid-col max-w-6xl mx-auto px-2 md:px-1">
              <h2 className="text-lg py-4 md:text-4xl font-semibold text-[#566985] ">
                Types of Long Distance Moves
              </h2>
             
            </div>

           
          </div>
        </div>



            <section className="md:flex justify-center gap-4 max-w-6xl mx-auto mt-3 sm:block md:px-1">
                <div className='bg-white md:w-[50%] lg:w-[70%] sm:w-[90%] p-6 rounded-md border-2 border-[#eee]'>
                    <section>
                        <h1 className='text-xl font-bold text-[#566985]'>Small Moves</h1>
                        <p className='mt-2 text-sm text-[#878C9F]'>
                        If you live in a small home, an apartment, condo or townhouse, let us help get your long distance move going.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Residential Moves</h1>
                        <p className='mt-2 text-sm text-[#878C9F]'>
                        Home moving can be overwhelming. Let us take the stress out of moving and get you started with a quote today.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>International Moves</h1>
                        <p className='mt-2 text-sm text-[#878C9F]'>
                        If you are moving to another country, Mayflower International can manage your international move from start to finish. 
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Corporate Relocation</h1>
                        <p className='mt-2  text-sm text-[#878C9F]'>
                        Whether you have a lump sum or are looking for corporate relocation services for your transferees, we can help with your corporate move.
                        </p>
                    </section>
                    <section className='mt-3'>
                        <h1 className='text-xl font-bold text-[#566985]'>Small And Large Student Moves</h1>
                        <p className='mt-2 text-sm text-[#878C9F]'>
                        No matter what you need to move, Packmyload can help. We offer student moves for any location and items from 1kg up to 30kg and you can book as many items as you like with us.
                        </p>
                    </section>
                </div>
                <div className='md:w-[50%] md:w-[50%] sm:w-[90%]'> 
                    <section className='flex gap-2 items-start mt-4'>
                        <Image 
                            src="/images/icons/aid-support.webp"
                            alt='aid-support'
                            width={100}
                            height={100}
                            className="object-contain " 
                        />
                        <div>
                            <h1 className='text-lg text-[#4DB7FE] font-bold'>24 Hours Support</h1>
                            <p className='mt-2 text-sm text-[#878C9F]'>Packmyload.com is proud to offer 24 hours support. When you call the Packmyload.com support team, you’ll speak to a person immediately, addressing any issues and ensuring prompt resolution.</p>
                        </div>
                    </section>
                    <section className='flex gap-2 items-start mt-12'>
                        <Image 
                            src="/images/icons/guarantee-icon.webp"
                            alt='gurantee-icon'
                            width={100}
                            height={100}
                            className="object-contain " 
                        />
                        <div>
                            <h1 className='text-lg text-[#4DB7FE] font-bold'>Packmyload.com Guarantee</h1>
                            <p className='mt-2 text-sm text-[#878C9F]'>At Packmyload, we apply our ‘can-do’ attitude to every job we take on. We guarantee 100% satisfaction.</p>
                        </div>
                    </section>
                </div>
            </section>
            <section  className='mt-6'>
                <div className='flex flex-wrap mx-auto items-center justify-center h-full bg-[#4DB7FE] gap-4 py-12 px-1' >
                  <h1 className='text-xl md:text-2xl font-bold text-[#ffff] '>Request A Interstate Moving Quote</h1>
                  
                  <Link href='/move'>  
                    <button  className="text-white shadow-lg border-2 text-xl font-bold p-3 w-[200px] bg-[#4BCBFE] outline-none transition-colors duration-600 hover:animate-pulse hover:bg-white hover:text-black rounded-full">Get Quote</button>
                  </Link>

                </div>
            </section>
        </main>
    )
}