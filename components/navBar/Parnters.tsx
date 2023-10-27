import Link from 'next/link';
import React from 'react'
import { MenuProps, Dropdown, Space } from 'antd';
import { CaretDown } from '@phosphor-icons/react';
const items: MenuProps['items'] = [
  {
    key: '1',
     label: (
      <Link href='/partner'>
       Partner
     </Link>
   ),
  },
  {
    key: '2',
    label: (
      <Link href='/become_a_packer' >
        Explore partnerships
      </Link>
    ),
  },
  {
  key: '3',
    label: (
      <Link href='/partner/movers' >
        Move for us
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link href='/become_a_packer' >
        Become A PacMan
      </Link>
    ),
  },
];

function Partners() {
  return (
    <div>
        <Dropdown menu={{ items }} className='flex w-16'  overlayClassName='custom-dropdown-overlay'>
          <a onClick={(e) => e.preventDefault()} className='text-white hover:text-blue-100 cursor-pointer'>
            <Space className='flex items-center font-bold'>
              Partner
              <CaretDown size={16} className='text-inherit' weight="fill" />
            </Space>
          </a>
        </Dropdown>
    </div>
  )
}

export default Partners;