import React, { useState } from 'react'
import { Phone, List } from '@phosphor-icons/react';
import { Space } from 'antd';
import Link from 'next/link';
import CustomMenu from './customMenu';
import { usePathname } from 'next/navigation';

function tabletsNav() {
  const [displayMenu, setDisplayMenu] = useState(false)
  const pathname = usePathname()
  return (
      <div className="hidden sm:flex lg:hidden justify-center items-center w-max gap-4">
          <div onClick={() => setDisplayMenu(!displayMenu)} className='text-gray-500 cursor-pointer'>
            <Space className='bg-blue-100 p-1 rounded-sm hover:bg-blue-700'>
              <List size={32} color="#fff"  />
            </Space>
          </div>
            <div className='px-3 flex items-center w-max gap-4'> 
                <a href="tel:+2347007225776" className='text-white hover:text-blue-100 flex gap-2 items-center cursor-pointer font-bold w-max'>
                <Phone size={16} className='text-inherit' weight="fill" />
                  call us
                </a> 
        <div id='show-horizontal-line' className='h-[30px] w-[1px] bg-gray-100/20'></div>
        {!pathname.includes("book") &&
              <Link href='/book'  className='flex justify-evenly items-center w-[130px] p-[8px] book-move bg-blue-100 hover:bg-white hover:text-blue-300 text-white font-black rounded-full text-xs'>
                BOOK NOW 
              </Link> 
              }
      </div>
      {displayMenu && <CustomMenu displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />}
    </div>
  )
}

export default tabletsNav