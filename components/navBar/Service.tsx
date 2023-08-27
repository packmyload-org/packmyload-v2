import Link from 'next/link';
import React from 'react'
import { MenuProps, Dropdown, Space } from 'antd';
import { CaretDown } from '@phosphor-icons/react';
const items: MenuProps['items'] = [
  {
    key: '1',
     label: (
      <Link href='/partner'>
       Partner with us
     </Link>
   ),
  },
  {
    key: '2',
    label: (
      <Link href='/partner'>
        Become A PacMan
      </Link>
    ),
  }
];

function Services() {
  return (
    <div>
        <Dropdown menu={{ items }} className='flex w-16' key={items?.length}>
          <a onClick={(e) => e.preventDefault()} className='text-gray-500 cursor-pointer'>
            <Space className='flex items-center'>
              Partners
              <CaretDown size={16} color="#667280" weight="fill" />
            </Space>
          </a>
        </Dropdown>
    </div>
  )
}

export default Services;