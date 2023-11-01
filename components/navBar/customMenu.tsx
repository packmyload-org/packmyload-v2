import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { BiSolidRightArrow } from "react-icons/bi";
import { ArrowLeft } from '@phosphor-icons/react';
import data from "./dropdown.json";
type Props = {
  displayMenu: boolean;
 setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CustomMenu({ displayMenu, setDisplayMenu }: Props) {
  const [flip, setFlip] = useState(false)
  const [dropDownData, setDropDownData] = useState([{ name: '', to: '' }])
  const router = useRouter()
  const pathname = usePathname()
  const handleShowDropMenu = (menuType: string) => {    
    // Load menu data based on the selected menu type
    if (menuType === 'services') {
      setDropDownData(data.services);
    } else if (menuType === 'partners') {
      setDropDownData(data.partners);
    } else {
      setDropDownData([]);
    }
    setFlip(!flip);
  };

  const handleMenuItemClick = (path: string) => {
    router.push(path);
    setDisplayMenu(!displayMenu);
  };
   return (
    <div className='absolute min-w-[300px] top-[130%] sm:top-[105%] sm:min-w-[350px] right-[-36px] sm:right-0 input_shadow bg-white grid grid-cols-1 p-2'>
     {!flip ?
      (
        <>
              <p  className='w-[80%] mx-auto text-base font-extrabold mt-2 flex items-center justify-between hover:text-blue-100'
                onClick={()=>handleShowDropMenu("services")}
             >
                Services
                <BiSolidRightArrow color='#4bcbfe' className='w-3'/>
              </p>
              <p className='w-[80%] mx-auto text-base font-extrabold mt-2 hover:text-blue-100'
               onClick={() => {
                 setDisplayMenu(!displayMenu); router.push('/gallery');
              }}>
                Gallery
              </p>
             <p className='w-[80%] mx-auto text-base font-extrabold mt-2 flex items-center justify-between hover:text-blue-100'
               onClick={() => handleShowDropMenu('partners')}
             >
                Partners
                <BiSolidRightArrow color='#4bcbfe' className='w-3'/>
              </p>
              <p className='w-[80%] mx-auto text-base font-extrabold mt-2 hover:text-blue-100'
               onClick={() => {
                 router.push('/about-us');
               setDisplayMenu(!displayMenu)}}>
                  About Us
              </p>
          {!pathname.includes("book") &&
              <p className='w-[80%] mx-auto text-base font-extrabold hover:text-gray-900 text-white mt-2 p-[3px] sm:hidden bg-blue-100 text-center rounded-md'
                 onClick={() => { setDisplayMenu(!displayMenu); router.push('/book');  }}>
                Book Now
              </p>
             }
        </>
      ) :
      (
        <>
             <div className='space-y-2 w-[88%] mx-auto py-4'>
              <div onClick={()=>setFlip(!flip)}>
                <ArrowLeft color="#4bcbfe" weight="fill" size={20} />
              </div>
              {
                dropDownData?.map(item =>
                  <p
                    key={item.name}
                    onClick={() => handleMenuItemClick(item.to)}
                    className='w-[95%] ml-[5%] text-base font-bold hover:text-blue-300'
                  >
                  {item.name}
                  </p>)
              }
          </div>
        </>
      )}
    </div>
  )
}