'use client'
import React, { useState, useEffect } from 'react';
import ItemsCounter from '@/components/book_a_move_comp/ItemsCounter';
import smallMove from '@/utils/SmallMoves.json';
const BookingLayout = dynamic(() => import('../BookingLayout'), {
  loading: () => <Loading/>,
});
import dynamic from 'next/dynamic';
import Loading from '@/app/loading';
import { AddItems } from './AddItems';

interface Category {
  categoryName: string;
  items: { item: string; volume: number }[];
}

export default function Page() {
  const [data] = useState<Category[]>(smallMove);
  const [activeItems, setActiveItems] = useState<{ item: string; volume: number }[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>('Living Room');

  useEffect(() => {
    const selectedCategory = data.find((category) => category.categoryName === selectedTab);
    if (selectedCategory) {
      const active = selectedCategory.items
      setActiveItems(active);
    }
    
  }, [data, selectedTab]);
  let rightContent = (
    <div className='relative'>
        <AddItems />
       <div className='grid grid-cols-1 w-full mx-auto gap-6'>
      
      <div className='py-3 lg:space-y-3 min-h-[50vh]'>
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
          {activeItems.map((item, index) => (
            <ItemsCounter key={item.item} title={item.item} volume={item.volume} />
          ))}
        </div>
          </div>
        </div>
      </div>
  )
  
   const leftContent = (
   <div className="hidden md:block p-1 lg:px-4 my-auto h-[45vh] w-full items-bg bg-contain">
    
    </div>
 )
  return (
    <BookingLayout
      stepDescription="Select Everything You're Moving. ⛟"
      textDescription=
      "Please scroll & select the items you wish to move per room. We use this information to determine the size of the truck, the materials and the number of movers needed for your move."
      leftContent={leftContent}
      rightContent={rightContent}
      prev='/book/rooms'
      next='/book/locations-details'
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
