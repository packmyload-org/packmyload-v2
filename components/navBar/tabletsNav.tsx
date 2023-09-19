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
      Partner with Us
     </Link>
    ),
 },
];
function tabletsNav() {
  return (
      <div className="hidden sm:flex lg:hidden justify-center items-center relative w-max gap-4">
          <div onClick={() => alert('mobile Menu')} className='text-gray-500 cursor-pointer'>
            <Space className='bg-blue-100 p-1 rounded-sm hover:bg-blue-700'>
              <List size={32} color="#fff"  />
            </Space>
          </div>
            <div className='px-3 flex items-center w-max gap-4'> 
                <a href="tel:+2347007225776" className='text-white flex gap-2 items-center cursor-pointer font-bold w-max'>
                <Phone size={16} color='white' weight="fill" />
                  call us
                </a> 
                <div id='show-horizontal-line' className='h-[30px] w-[1px] bg-gray-100/20'></div>
              <Link href='/book_a_move'  className='flex justify-evenly items-center hover:animate-pulse w-[130px] p-[8px] border-inherit/20 border-[6px] bg-blue-100 hover:bg-blue-600 hover:text-gray-100 text-white font-bold rounded-full text-xs '>
                BOOK NOW 
              </Link> 
            </div>
    </div>
  )
}

export default tabletsNav