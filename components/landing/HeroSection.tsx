import React from 'react'

export default function HeroSection() {
  return (
    <section className='hero w-full h-screen relative flex flex-col justify-center'>
     <div className='h-full w-full bg-black opacity-50 z-0 absolute'/>

      <div className='my-auto  h-1/2 w-full z-30 text-gray-100'>
        <main className='container flex flex-col items-center text-center space-y-8'>
         <h1 className='text-3xl sm:text-4xl font-inter w-full font-semibold text-gray-100'>Moving as easy as <span className='font-extrabold'>ABC</span></h1>
         <p >Whether moving down the street, to another state, or to
									a new house or business address, we are here to help you with
									managing the stress.</p>
        </main>
      </div>
    </section>
  )
}
