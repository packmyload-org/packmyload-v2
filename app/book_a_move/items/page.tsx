'use client'
import React, { useState, useEffect } from 'react';
import ItemsCounter from '@/components/book_a_move_comp/ItemsCounter';
import smallMove from '@/utils/SmallMoves.json';
import { BookingLayout } from '../BookingLayout';
import {useRouter} from "next/navigation"
interface Category {
  categoryName: string;
  items: { item: string; volume: number }[];
}

export default function Page() {
  const [data] = useState<Category[]>(smallMove);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<{ item: string; volume: number }[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>('Living_Room/Dining');
  const router = useRouter()
  useEffect(() => {
    const selectedCategory = data.find((category) => category.categoryName === selectedTab);
    if (selectedCategory) {
      const filtered = selectedCategory.items.filter((item) =>
        item.item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    }
    
  }, [data, selectedTab, searchQuery]);
  let rightContent = (
    <div>
       <div className='grid grid-cols-1 w-full mx-auto gap-6 mt-10'>
      <input
        type='text'
        placeholder='Search '
        className='w-[300px] outline-none p-2 h-10 input_shadow border-2 placeholder-blue-800 border-blue-300 rounded-lg bg-blue-200'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className='py-3 space-y-3 min-h-[50vh]'>
        <div className='w-[90%] mx-auto md:w-full flex justify-between gap-4 pt-6 overflow-y-scroll scrollbar-hide'>
          {data.map((category) => (
            <ItemsTabs
              key={category.categoryName}
              name={category.categoryName}
              onClick={() => setSelectedTab(category.categoryName)}
              selected={selectedTab === category.categoryName}
            />
          ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-2 w-full pt-4'>
          {filteredItems.map((item, index) => (
            <ItemsCounter key={item.item} title={item.item} volume={item.volume} />
          ))}
        </div>
      </div>
      <div className='mb-4 w-[90%] mx-auto grid grid-cols-2'>
      <div className='bg-blue-300 mx-auto text-center w-[130px] md:w-[160px]  font-black text-md text-white  hover:bg-white p-2 rounded-lg hover:text-blue-300' onClick={()=>router.push('/book_a_move')}>
          GO BACK
        </div>
          <div className='bg-blue-300 mx-auto text-center w-[130px] md:w-[160px]  font-black text-md text-white hover:text-blue-300 hover:bg-white p-2 rounded-lg' onClick={()=>router.push('/book_a_move/locations-details')}>Proceed
            </div>
          </div>
        </div>
      </div>
  )
  
   const leftContent = (
   <div className="p-1 lg:px-4 my-auto h-[45vh] w-full contact-bg">
    
    </div>
 )
  return (
    <BookingLayout
      stepDescription='Select Move Items. ⛟'
      textDescription=
      "Discover Move Magic: Craft your perfect move by choosing items from various rooms. Mix and match to create a moving symphony tailored just for you!"
      leftContent={leftContent}
      rightContent={rightContent}
      prev='/book_a_move'
    />
  );
}

interface ItemsTabsProps {
  name: string;
  onClick: () => void;
  selected: boolean;
}

const ItemsTabs = (props: ItemsTabsProps) => {
  return (
    <section
       className={`min-w-max cursor-pointer ${
        props.selected ? 'border-b-2 border-blue-300 text-blue-300 font-bold' : ''
      }`}
      onClick={props.onClick}
    >
      <p className='text-lg font-semibold'>{props.name}</p>
    </section>
  );
};
