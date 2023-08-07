import Link from 'next/link';
import React from 'react'
import { MenuProps, Dropdown, Space } from 'antd';
import { CaretDown } from '@phosphor-icons/react';
const items: MenuProps['items'] = [
  {
    key: '1',
     label: (
      <Link href='/services'>
       Home Moves
     </Link>
   ),
  },
  {
    key: '2',
    label: (
     <Link href='/gallery'>
      Office Relocation
     </Link>
    ),
  },
  {
    key: '3',
    label: (
     <Link href='/partner'>
      Student Moves
     </Link>
    ),
 },
 {
   key: '4',
      label: (
     <Link href='/partner'>
        Cleaning Services
     </Link>
  ),
  },
 {
   key: '5',
      label: (
     <Link href='/partner'>
      Wedding Gift Handling
     </Link>
  ),
  },
 {
   key: '6',
      label: (
     <Link href='/partner'>
      Small Moves
     </Link>
  ),
  },
 {
   key: '7',
      label: (
     <Link href='/partner'>
      Junk Removal
     </Link>
  ),
  },
  {
   key: '8',
      label: (
     <Link href='/partner'>
      Storage
     </Link>
  ),
  },
];

function Services() {
  return (
    <div>
         <Dropdown menu={{ items }} className='flex w-16'>
    <a onClick={(e) => e.preventDefault()} className='text-gray-500 cursor-pointer'>
      <Space className='flex items-center'>
        Services
        <CaretDown size={16} color="#667280" weight="fill" />
      </Space>
    </a>
        </Dropdown>
    </div>
  )
}

export default Services;