'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import ItemsCounter from '@/components/book_a_move_comp/ItemsCounter';
import smallMove from '@/utils/SmallMoves.json';

export default function Page() {
  // Step 1: Store the JSON data in state
  const [data] = useState(smallMove);

  // Step 2: Create a state variable to track the selected tab
  const [selectedTab, setSelectedTab] = useState('All');

  // Step 3: Modify ItemsTabs to accept a callback for tab selection
  const handleTabClick = (categoryName: string) => {
    setSelectedTab(categoryName);
  };

  return (
    <div className='grid grid-cols-1 max-w-6xl mx-auto gap-6 mt-10'>
      <input
        type='text'
        placeholder='Search '
        className='w-[300px] outline-none p-2 h-10 input_shadow border-2 placeholder-blue-800 border-blue-300 rounded-lg bg-blue-200'
      />
      <div className='py-3 space-y-3 pt-3'>
        <div className='w-full flex justify-between'>
          {/* Step 4: Map and render the tabs */}
          {data.map((category) => (
            <ItemsTabs
              key={category?.categoryName}
              name={category?.categoryName}
              onClick={handleTabClick} // Pass the callback function
              selected={selectedTab === category?.categoryName} // Pass a flag to indicate if the tab is selected
            />
          ))}
        </div>
        <div className='flex gap-12 w-full  flex-wrap pb-3'>
          {/* Step 4: Filter and render the items based on the selected tab */}
          {data
            .find((category) => category?.categoryName === selectedTab)
            ?.items.map((item, index) => (
              <ItemsCounter key={index} title={item.item} />
            ))}
        </div>
      </div>
      <div className='mb-4 w-1/2 mx-auto flex'>
        <div className='bg-blue-800 mx-auto text-center w-[160px]  font-bold text-md text-gray-600 hover:text-gray-100 hover:bg-red-500 p-2 rounded-lg'>
          <Link href={'/book_a_move'}>GO BACK</Link>
        </div>
        <div className='bg-blue-600 mx-auto text-center w-[160px]  font-bold text-md text-gray-600 hover:text-gray-100 hover:bg-blue-300 p-2 rounded-lg'>
          <Link href={'/book_a_move/locations-details'}>Proceed</Link>
        </div>
      </div>
    </div>
  );
}

type Props = {
  name: string;
  onClick: (categoryName: string) => void; 
  selected: boolean; 
};

const ItemsTabs = (props: Props) => {
  return (
    <section
      className={`min-w-max cursor-pointer ${
        props.selected ? 'border-b-2 border-blue-300 text-blue-300 font-bold' : ''
      }`}
      onClick={() => props.onClick(props.name)} 
    >
      <p>{props.name}</p>
    </section>
  );
};
