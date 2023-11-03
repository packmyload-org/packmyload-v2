import Link from 'next/link'
import Image from 'next/image'
import {Phone} from '@phosphor-icons/react'
import MobileNav from './navBar/mobileNav';
import TabletsNav from './navBar/tabletsNav';
import Services from './navBar/Service';
import Partners from './navBar/Parnters';

const Logo = "/images/icons/Logo.svg"

function Nav() {  
  return (
    <>
    <nav className="flex justify-between w-full px-2 lg:px-10 py-3 bg-[#2E5F9E] fixed top-0 z-30">
    <Link href='/' className='flex gap-2 text-center cursor-pointer'>
    <Image 
      src={ Logo }
      alt='Moving Company in lagos & abuja Nigeria: Packmyload Logo'
      width={100}
      height={37}
      className='object-contain w-[150px]'
      priority
      />
    </Link>
    
    {/* Desktop Navigation  */}
    <div className="lg:flex hidden no-wrap items-center relative text-sm md:w-5/6 lg:w-[57%]">
        <div className='text-white w-full gap-6 flex justify-evenly items-center'>
        <Link href='/services' className=' text-white cursor-pointer font-black w-max'>
          <Services/>
        </Link>
        <Link href='/gallery' className='text-white  hover:text-blue-100 cursor-pointer font-bold w-max'>
          Gallery
            </Link>
            
            <Partners /> 
            
        <Link href='/about-us' className='text-white  hover:text-blue-100 cursor-pointer font-black whitespace-nowrap w-max'>
          About{' '}Us
        </Link>
            <div className='px-3 flex items-center w-max gap-4'> 
                <a href="tel:+2347007225776" className='text-white hover:text-blue-100 flex gap-2 items-center cursor-pointer font-black w-max'>
                <Phone size={16} className='text-inherit' weight="fill" />
                  call us
                </a> 
                <div id='show-horizontal-line' className='h-[30px] w-[1px] bg-gray-100/20'></div>
              
              <Link href='/book'  className='flex justify-evenly items-center w-[130px] p-[8px] book-move bg-blue-100 hover:bg-white hover:text-blue-300 text-white font-black rounded-full text-xs'>
                BOOK NOW 
              </Link> 
            </div>
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
