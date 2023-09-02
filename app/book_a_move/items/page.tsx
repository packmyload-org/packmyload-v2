'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ItemsCounter from '@/components/book_a_move_comp/ItemsCounter';
import smallMove from '@/utils/SmallMoves.json';

interface Category {
  categoryName: string;
  items: { item: string; price: number }[];
}

export default function Page() {
  const [data] = useState<Category[]>(smallMove);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<{ item: string; price: number }[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>('All');

  useEffect(() => {
    const selectedCategory = data.find((category) => category.categoryName === selectedTab);
    if (selectedCategory) {
      const filtered = selectedCategory.items.filter((item) =>
        item.item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  }, [data, selectedTab, searchQuery]);

  return (
    <div className='grid grid-cols-1 max-w-6xl mx-auto gap-6 mt-10'>
      <input
        type='text'
        placeholder='Search '
        className='w-[300px] outline-none p-2 h-10 input_shadow border-2 placeholder-blue-800 border-blue-300 rounded-lg bg-blue-200'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className='py-3 space-y-3'>
        <div className='w-full flex justify-between pt-6 '>
          {data.map((category) => (
            <ItemsTabs
              key={category.categoryName}
              name={category.categoryName}
              onClick={() => setSelectedTab(category.categoryName)}
              selected={selectedTab === category.categoryName}
            />
          ))}
        </div>
        <div className='flex gap-12 w-full  flex-wrap pb-3'>
          {filteredItems.map((item, index) => (
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
      <p>{props.name}</p>
    </section>
  );
};
