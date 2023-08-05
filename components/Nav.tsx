'use client'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import Logo from '@/public/images/logo.png'
import LogoMinify from '@/public/images/iconpackmyload.png'
import { SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space , Grid} from 'antd';
import {Phone, CaretDown, FirstAid, List } from '@phosphor-icons/react'
const { useBreakpoint } = Grid;
const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];
function Nav() {
  const {sm} = useBreakpoint()
  return (
    <nav className="flex-between w-full px-10 py-3 bg-white border-b-2 border-[#9d9d9d] fixed top-0 z-30">
    <Link href='/' className='flex gap-2 text-center cursor-pointer'>
    {/* {sm ?  */}
    <Image 
      src={sm ? Logo : LogoMinify}
      alt='Logo'
      width={sm ? 200 : 37}
      height={sm ? 200 : 37}
      className='object-contain'
      />
    </Link>
    
    {/* Desktop Navigation  */}
    <div className="lg:flex hidden no-wrap items-center text-sm md:w-5/6 lg:w-1/2">
      <div className='text-gray-500 w-full gap-10 flex justify-evenly items-center'>
      <Dropdown menu={{ items }} className=' w-16'>
    <a onClick={(e) => e.preventDefault()} className='text-gray-500 cursor-pointer'>
      <Space>
        Services
        <CaretDown size={16} color="#667280" weight="fill" />
      </Space>
    </a>
        </Dropdown>
        <Link href='/gallery' className=' w-16 text-gray-500 cursor-pointer'>
          Gallery
        </Link>
        <Dropdown menu={{ items }} className=' w-16'>
    <a onClick={(e) => e.preventDefault()} className='text-gray-500 cursor-pointer'>
      <Space>
        Partner
        <CaretDown size={16} color="#667280" weight="fill" />
      </Space>
    </a>
        </Dropdown>
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
    <div className="hidden md:flex lg:hidden justify-center items-center relative">
    <Dropdown menu={{ items }} className=' w-16'>
    <a onClick={(e) => e.preventDefault()} className='text-gray-500 cursor-pointer'>
      <Space className='bg-blue-100 p-1 rounded-sm hover:bg-blue-700'>
        <List size={32} color="#667280" weight="thin" />
      </Space>
    </a>
        </Dropdown>
      <a href="tel:+2347007225776" className='text-gray-500 flex-between w-16 cursor-pointer'>
        <Phone size={16} color="#667280" weight="fill" />
          call us
        </a>
        <Link href='https://pack-my-load-booking.vercel.app/' className='flex justify-evenly items-center hover:animate-pulse w-[160px] p-[10px] border-[#9d9d9d] border-[10px] bg-blue-100 hover:bg-blue-600  text-gray-500 font-bold rounded-full text-xs'>
        BOOK NOW 
        <span>
          <FirstAid size={16} color="#667280" weight="fill" />    
        </span>
        </Link>
    </div>
        {/* Mobile Nav  */}
    <div className="sm:hidden flex justify-center items-center relative">
    <Dropdown menu={{ items }} className=' w-16'>
    <a onClick={(e) => e.preventDefault()} className='text-gray-500 cursor-pointer'>
      <Space className='bg-blue-100 p-1 rounded-sm hover:bg-blue-700'>
        <List size={32} color="#667280" weight="thin" />
      </Space>
    </a>
        </Dropdown>
      <a href="tel:+2347007225776" className='text-gray-500 flex-between w-16 cursor-pointer'>
        <Phone size={16} color="#" weight="fill" />
          call us
        </a>
    </div>
   </nav>
  )
}

export default Nav
