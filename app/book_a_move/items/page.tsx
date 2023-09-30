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
  const [selectedTab, setSelectedTab] = useState<string>('Living Room');
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
        className='w-[300px] outline-none p-2 h-10 shadow-black shadow-md border-2 placeholder-blue-800 border-blue-300 rounded-lg bg-blue-200'
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
        <div className='flex flex-wrap gap-2 w-full pt-4'>
          {filteredItems.map((item, index) => (
            <ItemsCounter key={item.item} title={item.item} volume={item.volume} />
          ))}
        </div>
          </div>
        </div>
      </div>
  )
  
   const leftContent = (
   <div className="p-1 lg:px-4 my-auto h-[45vh] w-full items-bg bg-contain">
    
    </div>
 )
  return (
    <BookingLayout
      stepDescription="Select Everything You're Moving. ⛟"
      textDescription=
      "Please scroll & select the items you wish to move per room. We use this information to determine the size of the truck, the materials and the number of movers needed for your move."
      leftContent={leftContent}
      rightContent={rightContent}
      prev='/book_a_move/rooms'
      next='/book_a_move/locations-details'
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
      <p className='text-sm font-semibold'>{props.name}</p>
    </section>
  );
};
