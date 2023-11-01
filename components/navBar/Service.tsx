import Link from 'next/link';
import React from 'react'
import { MenuProps, Dropdown, Space } from 'antd';
import { CaretDown } from '@phosphor-icons/react';

const items: MenuProps['items'] = [
  {
    key: '1',
     label: (
      <Link href='/home-moves' >
       Home Relocation
     </Link>
   ),
  },
  {
    key: '2',
    label: (
      <Link href='/office-moves' >
        Office Relocation
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link href='/international-relocations' >
        International Relocation
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link href='/Junk-moves' >
        Junk Removal
      </Link>
    ),
  },
  {
    key: '5',
    label: (
      <Link href='/storage' >
        Storage
      </Link>
    ),
  },
  {
    key: '6',
    label: (
      <Link href='/Interstate-Car-Transport'>
        Interstate Car Transport
      </Link>
    ),
  },
  {
    key: '7',
    label: (
      <Link href='/wedding-handling' >
        Wedding Handling
      </Link>
    ),
  },
  {
    key: '8',
    label: (
      <Link href='/store-delivery' >
        Store Delivery
      </Link>
    ),
  },
  {
    key: '9',
    label: (
      <Link href='/cleaning' >
        Cleaning Services
      </Link>
    ),
  }
];


function Services() {
  return (
    <div >
        <Dropdown menu={{ items }} className='flex w-16' overlayClassName='custom-dropdown-overlay'>
          <a href='' className='text-white hover:text-blue-100 cursor-pointer'>
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