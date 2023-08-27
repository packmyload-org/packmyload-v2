import { Phone, List, FirstAid } from '@phosphor-icons/react';
import { MenuProps, Dropdown, Space } from 'antd';
import Link from 'next/link';
import React from 'react'
const items: MenuProps['items'] = [
  {
    key: '1',
     label: (
      <Link href='/services'>
       Services
     </Link>
   ),
  },
  {
    key: '2',
    label: (
     <Link href='/gallery'>
      Gallery
     </Link>
    ),
  },
  {
    key: '3',
    label: (
     <Link href='/partner'>
      Partner with us
     </Link>
    ),
  },
  {
    key: '4',
    label: (
     <Link href='/become_a_packer'>
      Become a PacMan
     </Link>
    ),
 },
 {
   key: '5',
    label: (
      <Link href='/book_a_move'  className='flex justify-evenly items-center p-[8px] w-full  bg-blue-100 rounded-lg hover:bg-blue-600 hover:text-gray-100 text-gray-500 font-bold text-xs'>
        BOOK NOW 
      </Link>
  ),
  },
];
function mobileNav() {
  return (
 <div className="sm:hidden flex justify-center items-center relative">
    <Dropdown menu={{ items }} className='w-16 cursor-pointer'>
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
  )
}

export default mobileNav