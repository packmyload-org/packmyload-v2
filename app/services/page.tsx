import React from 'react';
import Image from 'next/image';
import servicesArr from '../../components/services/services.json'
import Faq from '@/components/landing/Faq';
export default function Service() {

  const servicesItems = servicesArr.map((item,index) => (
    <div 
      className="flex flex-col limitless-card rounded relative cursor-pointer" 
      key={index}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image 
          src={item.img} 
          alt="Read more" 
          width={100} 
          height={100} 
          loading='lazy'
          className="object-cover w-full h-auto rounded transition-transform duration-300 transform-gpu hover:scale-110" 
        />
        <div className="absolute bottom-4 font-sans left-0 p-2 text-white text-lg font-bold">
          {item.title}
        </div>
      </div>
    </div>


  ))
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" style={{marginTop: '110px'}}>
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="section-title w-full relative  ">

              <div className='gap-6 flex flex-col'>
                  <h2 className="w-full font-bold text-4xl text-center">Services</h2>
                  <div className="section-subtitle uppercase">CATALOG OF SERVICES</div>
                  <span className="section-separator"></span>
                  <p className='w-full text-center '>Browse through our services to find the one relevant to you.</p>
              </div>
          </div><br />

          {/* Items */}
          <div className="bg-white mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-center md:max-w-2xl lg:max-w-none">
            {servicesItems}
          </div>
        </div>
      </div>
      <Faq />
    </section>
  );
}
