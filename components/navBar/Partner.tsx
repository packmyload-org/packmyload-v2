import { CaretDown, Link } from '@phosphor-icons/react'
import { Dropdown, MenuProps, Space } from 'antd'
import React from 'react'
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
];
export default function Partners() {
  return (
    <div>
       <Dropdown menu={{ items }} className='w-16 flex'>
    <a onClick={(e) => e.preventDefault()} className='text-gray-500 cursor-pointer'>
      <Space className='flex items-center'>
        Partner
        <CaretDown size={16} color="#667280" weight="fill" />
      </Space>
    </a>
        </Dropdown>
    </div>
  )
}
