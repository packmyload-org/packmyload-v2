import React from 'react'
import { Phone, List, FirstAid } from '@phosphor-icons/react';
import { MenuProps, Dropdown, Space } from 'antd';
import Link from 'next/link';
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
];
function tabletsNav() {
  return (
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
        <Link href='/book_a_move' className='flex justify-evenly items-center hover:animate-pulse w-[160px] p-[8px] border-inherit/20 border-[10px] bg-blue-100 hover:bg-blue-600 hover:text-gray-100 text-gray-500 font-bold rounded-full text-xs'>
        BOOK NOW 
        <span>
          <FirstAid size={16} color="#667280" weight="fill" />    
        </span>
        </Link>
    </div>
  )
}

export default tabletsNav