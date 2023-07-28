'use client'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import Logo from '@/public/images/logo.png'
import LogoMinify from '@/public/images/iconpackmyload.png'
import { SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space , Grid} from 'antd';
import {Phone, CaretDown, FirstAid } from '@phosphor-icons/react'
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
    <nav className="flex-between w-full mb-16 px-10 py-4 bg-blue-300">
    <Link href='/' className='flex gap-2 text-center cursor-pointer'>
    {sm ? 
    <Image 
      src={Logo}
      alt='Logo'
      width={200}
      height={100}
      className='object-contain'
      />:
      <Image 
      src={LogoMinify}
      alt='Logo'
      width={37}
      height={37}
      className='object-contain'
      />
      }
    </Link>
    
    {/* Desktop Navigation  */}
    <div className="sm:flex hidden no-wrap items-center text-sm  w-1/2">
      <div className='text-gray-300 w-full gap-10 flex justify-evenly items-center'>
      <Dropdown menu={{ items }} className=' w-16'>
    <a onClick={(e) => e.preventDefault()} className='text-gray-300 cursor-pointer'>
      <Space>
        Services
        <CaretDown size={16} color="#fefbfb" weight="fill" />
      </Space>
    </a>
        </Dropdown>
        <Link href='/gallery' className=' w-16 cursor-pointer'>
          Gallery
        </Link>
        <Dropdown menu={{ items }} className=' w-16'>
    <a onClick={(e) => e.preventDefault()} className='text-gray-300 cursor-pointer'>
      <Space>
        Partner
        <CaretDown size={16} color="#fefbfb" weight="fill" />
      </Space>
    </a>
        </Dropdown>
        <a href="tel:+2347007225776" className='text-gray-100 flex-between w-16 cursor-pointer'>
        <Phone size={16} color="#ffffff" weight="fill" />
          call us
        </a>
      <button type='button' className='flex justify-evenly items-center hover:animate-pulse w-[160px] p-[10px] border-[#587FB1] border-[10px] bg-blue-100 hover:bg-blue-700 text-gray-100 font-bold rounded-full  text-sm'>
        BOOK NOW 
        <span>
          <FirstAid size={16} color="#fefbfb" weight="fill" />    
        </span>
      </button>
      </div>
    </div>
        {/* Mobile Nav  */}
    <div className="sm:hidden flex relative">
      hello mobile
    </div>
   </nav>
  )
}

export default Nav
