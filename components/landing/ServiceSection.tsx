'use client'
import { Row } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import ServiceImage from '../../public/images/moving-company-lagos-nigeria-packmyload.com-home_moves-banner_image.png';
import type { StaticImageData } from 'next/image';
import { Eye } from '@phosphor-icons/react';
interface List {
  serviceImage: StaticImageData;
  href: any;
  serviceName: string;
}

const Servicelist: List[] = [
  {
    serviceImage: ServiceImage,
    href: '#',
    serviceName: 'Service 1',
  },
  {
    serviceImage: ServiceImage,
    href: '#',
    serviceName: 'Service 2',
  },
  {
    serviceImage: ServiceImage,
    href: '#',
    serviceName: 'Service 3',
  },
];

export default function ServiceSection() {
  return (
    <div className='pt-[7%] pb-10 w-full bg-white'>
      <div className="container">
        <div className="section-title relative ">
          <h2 className="w-full font-bold text-4xl text-center">Services</h2>
          <div className="section-subtitle">Catalog of Services</div>
          <span className="section-separator"></span>
          <p className='w-full text-center mt-[10%] '>Browse through our services to find the one relevant to you.</p>
        </div>
        {/* portfolio */}
        <Row className=' w-full mt-12 items-center px-[3%]' gutter={[16, 16]} justify={'space-between'}>
          {Servicelist.map((item, index) => (
            <div key={index} className='w-[350px] bg-[#566985] opacity-80 cursor-pointer relative rounded-lg'>
              <Link href={item.href}>
                <Image
                  src={item.serviceImage}
                  alt="moving company lagos nigeria home moves and relocation"
                  width={350}
                  height={300}
                  className='object-cover'
                />
              </Link>
              <h2 className='absolute bottom-4 font-bold text-2xl left-3 w-[300px] text-start'>{item.serviceName}</h2>
            </div>
          ))}
        </Row>
       {/* Portfolio end  */}
       <Link href='#' className='border-[#777373] border-2 rounded-lg sm:rounded-full '>
       <button type="button" className='bg-blue-100 hover:bg-blue-600 hover:animate-pulse p-3  w-[300px] my-10 mb-14 sm:w-[150px] mx-auto rounded-lg sm:rounded-full border-8 sm:border-none uppercase font-bold text-white flex items-center justify-evenly'>
            view all
            <span>
             <Eye color='#fff' size={24}/>
            </span>
          </button>
       </Link>
      </div>
    </div>
  );
}
