import Link from 'next/link';
import React from 'react'
import { MenuProps, Dropdown, Space } from 'antd';
import { CaretDown } from '@phosphor-icons/react';

const items: MenuProps['items'] = [
  {
    key: '1',
     label: (
      <Link href='/services/home-moves' >
       Home Relocation
     </Link>
   ),
  },
  {
    key: '2',
    label: (
      <Link href='/services/office-moves' >
        Office Relocation
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link href='/services/international-relocations' >
        InterNational Relocation
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link href='/services/junk-moves' >
        Junk Moves
      </Link>
    ),
  },
  {
    key: '5',
    label: (
      <Link href='/services/storage' >
        Storage
      </Link>
    ),
  },
  {
    key: '6',
    label: (
      <Link href='/services/Interstate-Car-Transport'>
        Interstate Car Transport
      </Link>
    ),
  },
  {
    key: '7',
    label: (
      <Link href='/services/wedding-handling' >
        Wedding Handling
      </Link>
    ),
  },
  {
    key: '8',
    label: (
      <Link href='/services/store-delivery' >
        Store Delivery
      </Link>
    ),
  },
  {
    key: '9',
    label: (
      <Link href='/services/cleaning' >
        Cleaning Services
      </Link>
    ),
  }
];


function Services() {
  return (
    <div >
        <Dropdown menu={{ items }} className='flex w-16' overlayClassName='custom-dropdown-overlay'>
          <a href='/services' className='text-white hover:text-blue-100 cursor-pointer'>
            <Space className='flex items-center font-bold'>
              Services
              <CaretDown size={16} weight="fill" className='text-inherit' />
            </Space>
          </a>
        </Dropdown>
    </div>
  )
}

export default Services;