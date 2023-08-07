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
      Partner
     </Link>
    ),
 },
 {
   key: '5',
    label: (
      <a href="https://pack-my-load-booking.vercel.app/">
        BOOK NOW
      </a>
  ),
  icon: <FirstAid size={16} color="#667280" weight="fill" />    
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