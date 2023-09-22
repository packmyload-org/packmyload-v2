'use client'
import Link from 'next/link';
import Services from '../services/Services';
import React from 'react';
import { Eye } from '@phosphor-icons/react';

export default function ServiceSection() {
  return (
    <div className='w-full bg-[#F9F9F9] py-10 hidden sm:hidden lg:block'>
      <Services />
      <div className="container items-start">
       {/* Portfolio end  */}
        <Link href='/services' className='border-2 rounded-lg sm:rounded-full p-2 w-[318px] mb-14 sm:w-[168px] mx-auto hover:animate-pulse'>
          <button type="button" className='bg-blue-100 hover:bg-blue-600 border-[#777373]/20 p-2  w-[300px] sm:w-[150px] rounded-lg sm:rounded-full border-8 sm:border-none uppercase font-bold text-white flex items-center text-xs justify-evenly'>
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
