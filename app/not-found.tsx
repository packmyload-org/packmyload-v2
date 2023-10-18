"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Link from "next/link"
import Head from 'next/head'
export default function NotFound() {

  const crossOrigin = true
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = ""  />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900display=swap" rel="stylesheet" />
        <title>Packmyload | 404</title>
      </Head>

      <Nav />
      { /*  Page illustration */}

      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
      </div>

      <section className="relative bg-slate-500 h-auto sm:h-auto lg:h-[95vh] xl:h-[550px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center">
              {/* Top image */}
              <div className="relative inline-flex flex-col mb-6" data-aos="fade-up">
                <h1 
                  className="font-black text-[6rem] text-white"
                  style={{fontFamily: "'Montserrat', sans-serif"}}
                >
                    404
                </h1>
              </div>
              {/* 404 content */}
              <h1 className="h1 mb-4 text-white" data-aos="fade-up" data-aos-delay="200">We're sorry, but the Page you were looking for, couldn't be found.</h1>
              <Link href='/'>
              
                <button
                    className="text-white shadow-lg text-base font-bold p-4 w-[fit-content] bg-[#4BCBFE] outline-none transition-colors duration-600 hover:animate-pulse hover:bg-white hover:text-black rounded-md"
                    >
                    Back to Home Page &#8658;
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}