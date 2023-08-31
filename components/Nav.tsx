'use client'
// import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Phone} from '@phosphor-icons/react'
import MobileNav from './navBar/mobileNav';
import TabletsNav from './navBar/tabletsNav';
import Services from './navBar/Service';
import { usePathname } from 'next/navigation'

const Logo = "https://res.cloudinary.com/packmyload/image/upload/v1545994681/PML1x.png"

function Nav() {  
  const pathname = usePathname()
  return (
    <>
    <nav className="flex-between w-full px-10 py-3 bg-[#2E5F9E] fixed top-0 z-30">
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
    <div className="lg:flex hidden no-wrap items-center text-sm md:w-5/6 lg:w-[47%]">
        <div className='text-white w-full gap-6 flex justify-evenly items-center'>
        <Link href='/services' className=' w-16 text-white cursor-pointer font-bold'>
          Services
        </Link>
        <Link href='/gallery' className=' w-16 text-white cursor-pointer font-bold'>
          Gallery
        </Link>
        <Services/>
        <Link href='/services' className=' w-16 text-white cursor-pointer font-bold'>
          About Us
        </Link>
        <a href="tel:+2347007225776" className='text-white flex-between w-16 cursor-pointer font-bold'>
        <Phone size={16} color='white' weight="fill" />
          call us
        </a> 
            
        {
          !pathname.includes("book_a_move") ?
          <Link href='/book_a_move'  className='flex justify-evenly items-center hover:animate-pulse w-[130px] p-[8px] border-inherit/20 border-[6px] bg-blue-100 hover:bg-blue-600 hover:text-gray-100 text-white font-bold rounded-full text-xs '>
            BOOK NOW 
            {/* <span className='font-extrabold text-lg max-h-5 text-center flex justify-center items-center'>
              + 
            </span> */}
          </Link> : null
        }
      </div>
    </div>
        {/* Tablet  */}
      <TabletsNav/>
        {/* Mobile Nav  */}
      <MobileNav/>
    </nav>
        </>
  )
}

export default Nav
