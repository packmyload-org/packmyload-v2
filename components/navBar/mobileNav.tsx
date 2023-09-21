import { Phone, List, FirstAid } from '@phosphor-icons/react';
import { MenuProps, Dropdown, Space } from 'antd';
import Link from 'next/link';
import React,{useState} from 'react'
import CustomMenu from './customMenu';

function mobileNav() {
  const [displayMenu, setDisplayMenu] = useState(false)
  return (
  <div className="sm:hidden flex justify-center items-center relative gap-4">
    <div onClick={() => setDisplayMenu(!displayMenu)} className='text-gray-500 cursor-pointer'>
      <Space className='bg-blue-100 p-1 rounded-sm hover:bg-blue-700'>
        <List size={32} color="#fff"  />
      </Space>
    </div>
    <a href="tel:+2347007225776" className='text-white hover:text-blue-100 flex gap-2 items-center cursor-pointer font-bold w-max'>
      <Phone size={16} className='text-inherit' weight="fill" />
        call us
      </a> 
      {displayMenu && <CustomMenu setDisplayMenu={setDisplayMenu} displayMenu={displayMenu} />}
  </div>
  )
}

export default mobileNav