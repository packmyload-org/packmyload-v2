"use client"
import Image from 'next/image';
import servicesArr from './services.json'
import Link from 'next/link';
import {usePathname} from 'next/navigation'

export default function Services(){

    const pathname = usePathname()

    const servicesItems = 
      pathname === '/' ? servicesArr.map((item,index) => {

          if(pathname === '/' && index <= 5)
          return (
            <div 
              className="flex flex-col rounded relative cursor-pointer" 
              key={index}
            >
              <Link href={item.to}>
                <div className="relative w-full h-full overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                  <img 
                    src={item.img} 
                    alt={item.alt} 
                    width={100} 
                    height={100} 
                    loading='lazy'
                    className="object-cover w-full h-auto rounded transition-transform duration-300 transform-gpu hover:scale-110" 
                  />
                  <div className="absolute bottom-4 z-20 left-0 p-2 text-white text-xl font-extrabold">
                    {item.title}
                  </div>
                </div>

              </Link>
            </div>
            )
        })
        : servicesArr.map((item,index) => (

            <div 
              className="flex flex-col rounded relative cursor-pointer" 
              key={index}
            >
              <Link href={item.to}>
                <div className="relative w-full h-full overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                  <img 
                    src={item.img} 
                    alt={item.alt} 
                    width={100} 
                    height={100} 
                    loading='lazy'
                    className="object-cover w-full h-auto rounded transition-transform duration-300 transform-gpu hover:scale-110" 
                  />
                  <div className="absolute bottom-4 z-20 left-0 p-2 text-white text-xl font-extrabold">
                    {item.title}
                  </div>
                </div>
              </Link>
            </div>
        ))

    return(
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-2">

              {/* Section header */}
              <div className="section-title w-full relative">

                  <div className='gap-6 flex flex-col'>
                      <h2 className="w-full font-bold text-xl sm:text-xl md:text-4xl text-center mt-2 md:mt-0">Services</h2>
                      <div className="section-subtitle uppercase text-3xl sm:text-3xl md:text-[4rem]">CATALOG OF SERVICES</div>
                      <span className="section-separator"></span>
                      <p className='w-full text-center '>Browse through our services to find the one relevant to you.</p>
                  </div>
              </div><br />

              {/* Items */}
              <div className="mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-center md:max-w-2xl lg:max-w-none p-3">
                  {servicesItems}
              </div>
            </div>
        </div>
    )
}