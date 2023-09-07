import Link from 'next/link';
import React from 'react'
import { MenuProps, Dropdown, Space } from 'antd';
import { CaretDown } from '@phosphor-icons/react';
import {redirect} from 'next/navigation'
import InternationRelocation from '../../app/services/international-relocations/page';

const items: MenuProps['items'] = [
  {
    key: '1',
     label: (
      <Link href='/services/home-moves'>
       Home Relocation
     </Link>
   ),
  },
  {
    key: '2',
    label: (
      <Link href='/services/office-moves'>
        Office Relocation
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link href='/services/international-relocations'>
        International Relocation
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link href='/services/junk-moves'>
        Junk Moves
      </Link>
    ),
  },
  {
    key: '5',
    label: (
      <Link href='/services/storage'>
        Storage
      </Link>
    ),
  },
  {
    key: '6',
    label: (
      <Link href='/services/student-moves'>
        Student Moves
      </Link>
    ),
  },
  {
    key: '7',
    label: (
      <Link href='/services/wedding-handling'>
        Wedding Handling
      </Link>
    ),
  },
  {
    key: '8',
    label: (
      <Link href='/services/store-delivery'>
        Store Delivery
      </Link>
    ),
  },
  {
    key: '9',
    label: (
      <Link href='/services/cleaning'>
        Cleaning Services
      </Link>
    ),
  }
];

function Services() {
  return (
    <div>
        <Dropdown menu={{ items }} className='flex w-16'>
          <a href='/services' className='text-white cursor-pointer'>
            <Space className='flex items-center font-bold'>
              Services
              <CaretDown size={16} color="white" weight="fill" />
            </Space>
          </a>
        </Dropdown>
    </div>
  )
}

export default Services;