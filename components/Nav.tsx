'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import {Phone} from '@phosphor-icons/react'
import MobileNav from './navBar/mobileNav';
import TabletsNav from './navBar/tabletsNav';
import Services from './navBar/Service';

function Nav() {
  return (
    <nav className="flex-between w-full px-10 py-3 bg-white border-b-2 border-[#9d9d9d] fixed top-0 z-30">
    <Link href='/' className='flex gap-2 text-center cursor-pointer'>
    <Image 
      src={ Logo }
      alt='Logo'
      width={100}
      height={37}
      className='object-contain md:w-[170px]'
      />
    </Link>
    
    {/* Desktop Navigation  */}
    <div className="lg:flex hidden no-wrap items-center text-sm md:w-5/6 lg:w-1/2">
        <div className='text-gray-500 w-full gap-10 flex justify-evenly items-center'>
        <Link href='/services' className=' w-16 text-gray-500 cursor-pointer'>
          Services
        </Link>
        <Link href='/gallery' className=' w-16 text-gray-500 cursor-pointer'>
          Gallery
        </Link>
        <Services/>
        <a href="tel:+2347007225776" className='text-gray-500 flex-between w-16 cursor-pointer'>
        <Phone size={16} color='#667280' weight="fill" />
          call us
        </a>
      <Link href='https://pack-my-load-booking.vercel.app/'  className='flex justify-evenly items-center hover:animate-pulse w-[160px] p-[8px] border-[#9d9d9d] border-[10px] bg-blue-100 hover:bg-blue-600 hover:text-gray-100 text-gray-500 font-bold rounded-full text-xs'>
        BOOK NOW 
        <span className='font-extrabold text-lg max-h-5 text-center flex justify-center items-center'>
        + 
        </span>
      </Link>
      </div>
    </div>
        {/* Tablet  */}
      <TabletsNav/>
        {/* Mobile Nav  */}
      <MobileNav/>
   </nav>
  )
}

export default Nav
